<template>
  <div ref="chart" />
</template>

<script>
import { loadGoogleCharts } from '../../../src/lib/google-charts-loader';
import { debounce } from '../../../src/lib/debounce';
import { createChartObject, getValidChartData } from '../../../src/utils';

let chartsLib = null;
export default {
  name: 'GChart',

  props: {
    type: {
      type: String,
      required: true,
    },
    data: {
      type: [Array, Object],
      default: () => [],
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    version: {
      type: String,
      default: 'current',
    },
    settings: {
      type: Object,
      default: () => ({
        packages: ['corechart', 'table'],
      }),
    },
    events: {
      type: Object,
      default: null,
    },
    createChart: {
      type: Function,
      default: null,
    },
    resizeDebounce: {
      type: Number,
      default: 200,
    },
  },

  data() {
    return {
      chartObject: null,
    };
  },

  watch: {
    data: {
      deep: true,
      handler() {
        this.drawChart();
      },
    },
    options: {
      deep: true,
      handler() {
        this.drawChart();
      },
    },
    type() {
      this.chartObject = createChartObject(
        chartsLib,
        this.chartObject,
        this.$refs.chart,
        this.type,
        this.events,
        this.createChart
      );
      this.drawChart();
    },
  },

  mounted() {
    loadGoogleCharts(this.version, this.settings).then(api => {
      chartsLib = api;
      this.chartObject = createChartObject(
        chartsLib,
        this.chartObject,
        this.$refs.chart,
        this.type,
        this.events,
        this.createChart
      );

      this.$emit('ready', this.chartObject, api);
      this.drawChart();
    });

    if (this.resizeDebounce > 0)
      window.addEventListener(
        'resize',
        debounce(this.drawChart, this.resizeDebounce)
      );
  },

  beforeDestroy() {
    if (
      this.chartObject !== null &&
      typeof this.chartObject.getChart().clearChart() === 'function'
    ) {
      this.chartObject.getChart().clearChart();
    }
  },

  methods: {
    drawChart() {
      if (!chartsLib || !this.chartObject) return;
      const data = getValidChartData(chartsLib, this.data);
      if (data) this.chartObject.draw(data, this.options);
    },
  },
};
</script>
