<template>
  <div ref="chart"></div>
</template>

<script>
import loadGoogleCharts from '../lib/google-charts-loader'
let chartsLib = null

export default {
  name: 'GChart',

  props: {
    type: {
      type: String,
      requred: true
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
    }
  },

  mounted () {
    loadGoogleCharts(this.version, this.settings).then(api => {
      chartsLib = api
      const chart = this.createChartObject()
      this.$emit('ready', chart, api)
      this.drawChart()
    })
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
      return null
    },

    createChartObject () {
      this.chartObject = new chartsLib.visualization[this.type](this.$refs.chart)
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
