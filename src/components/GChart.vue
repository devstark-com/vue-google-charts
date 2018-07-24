<template>
  <div ref="chart"></div>
</template>

<script>
import loadGoogleCharts from '../lib/google-charts-loader'
import debounce from 'debounce'
let chartsLib = null
export default {
  name: 'GChart',

  props: {
    type: {
      type: String
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
      type: Object
    },
    createChart: {
      type: Function
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
        this.drawChart()
      }
    },
    options: {
      deep: true,
      handler () {
        this.drawChart()
      }
    },
    type (value) {
      this.createChartObject()
      this.drawChart()
    }
  },

  mounted () {
    loadGoogleCharts(this.version, this.settings).then(api => {
      chartsLib = api
      const chart = this.createChartObject()
      this.$emit('ready', chart, api)
      this.drawChart()
    })
    if (this.resizeDebounce > 0) window.addEventListener('resize', debounce(this.drawChart, this.resizeDebounce))
  },

  methods: {
    drawChart () {
      if (!chartsLib || !this.chartObject) return
      const data = this.getValidChartData()
      if (data) this.chartObject.draw(data, this.options)
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
      }
      const fn = this.createChart || createChart
      this.chartObject = fn(this.$refs.chart, chartsLib, this.type)
      this.attachListeners()
      return this.chartObject
    },

    attachListeners () {
      if (!this.events) return
      Object.entries(this.events).forEach(([event, listener]) => {
        chartsLib.visualization.events.addListener(this.chartObject, event, listener)
      })
    }
  }
}

</script>
