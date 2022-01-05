'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var debounce = require('debounce');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

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

//
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
      default: null
    },
    createChart: {
      type: Function,
      default: null
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
    if (this.resizeDebounce > 0) window.addEventListener('resize', debounce__default["default"](this.drawChart, this.resizeDebounce));
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
      console.log(fn);
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

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "chart" }, [])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = "data-v-3d650292";
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

// Install the components
function install (Vue) {
  Vue.component('GChart', __vue_component__);
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: "0.3.2",
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

exports.GChart = __vue_component__;
exports["default"] = plugin;
exports.install = install;
exports.loadGoogleCharts = loadGoogleCharts;
