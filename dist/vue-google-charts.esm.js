import debounce from 'debounce';
import { openBlock, createElementBlock } from 'vue';

/**
 * Usage:
 * import { loadGoogleCharts } from 'vue-google-charts'
 *
 * loadGoogleCharts('current', { packages: ['corechart', 'map'] })
 *  .then(google => {
 *    const chart = new google.visualization.Map ...
 *  })
 */

const chartsScriptUrl = 'https://www.gstatic.com/charts/loader.js';

let chartsLoaderPromise = null;
const loadedPackages = new Map();

function getChartsLoader () {
  // If already included in the page:
  if (window.google && window.google.charts) {
    return Promise.resolve(window.google.charts)
  }
  if (!chartsLoaderPromise) {
    chartsLoaderPromise = new Promise(resolve => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload = () => resolve(window.google.charts);
      script.src = chartsScriptUrl;
      document.body.appendChild(script);
    });
  }
  return chartsLoaderPromise
}

function loadGoogleCharts (version = 'current', settings = {}) {
  return getChartsLoader().then(loader => {
    if (typeof settings !== 'object') throw new Error('Google Charts loader: settings must be an object')
    const settingsKey = version + '_' + JSON.stringify(settings, Object.keys(settings).sort());

    if (loadedPackages.has(settingsKey)) return loadedPackages.get(settingsKey)

    const loaderPromise = new Promise(resolve => {
      loader.load(version, settings);
      loader.setOnLoadCallback(() => resolve(window.google));
    });
    loadedPackages.set(settingsKey, loaderPromise);
    return loaderPromise
  })
}

let chartsLib = null;
var script = {
  name: 'GChart',

  props: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: [Array, Object],
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({})
    },
    version: {
      type: String,
      default: 'current'
    },
    settings: {
      type: Object,
      default: () => ({
        packages: ['corechart', 'table']
      })
    },
    events: {
      type: Object,
      default: () => ({})
    },
    createChart: {
      type: Function,
      default: () => ({})
    },
    resizeDebounce: {
      type: Number,
      default: 200
    }
  },

  data () {
    return {
      chartObject: null
    }
  },

  watch: {
    data: {
      deep: true,
      handler () {
        this.drawChart();
      }
    },
    options: {
      deep: true,
      handler () {
        this.drawChart();
      }
    },
    type (value) {
      this.createChartObject();
      this.drawChart();
    }
  },

  mounted () {
    loadGoogleCharts(this.version, this.settings).then(api => {
      chartsLib = api;
      const chart = this.createChartObject();
      this.$emit('ready', chart, api);
      this.drawChart();
    });
    if (this.resizeDebounce > 0) window.addEventListener('resize', debounce(this.drawChart, this.resizeDebounce));
  },

  beforeDestroy () {
    if (this.chartObject && typeof this.chartObject.clearChart === 'function') {
      this.chartObject.clearChart();
    }
  },

  methods: {
    drawChart () {
      if (!chartsLib || !this.chartObject) return
      const data = this.getValidChartData();
      if (data) this.chartObject.draw(data, this.options);
    },

    getValidChartData () {
      if (this.data instanceof chartsLib.visualization.DataTable) return this.data
      if (this.data instanceof chartsLib.visualization.DataView) return this.data
      if (Array.isArray(this.data)) return chartsLib.visualization.arrayToDataTable(this.data)
      if (this.data !== null && typeof this.data === 'object') return new chartsLib.visualization.DataTable(this.data)
      return null
    },

    createChartObject () {
      const createChart = (el, google, type) => {
        if (!type) throw new Error('please, provide chart type property')
        return new google.visualization[type](el)
      };
      const fn = this.createChart || createChart;
      this.chartObject = fn(this.$refs.chart, chartsLib, this.type);
      this.attachListeners();
      return this.chartObject
    },

    attachListeners () {
      if (!this.events) return
      Object.entries(this.events).forEach(([event, listener]) => {
        chartsLib.visualization.events.addListener(this.chartObject, event, listener);
      });
    }
  }
};

const _hoisted_1 = { ref: "chart" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, null, 512 /* NEED_PATCH */))
}

script.render = render;

// Install the components
function install (Vue) {
  Vue.component('GChart', script);
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install
};

// Auto-install
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export { script as GChart, plugin as default, install, loadGoogleCharts };
