<template>
  <GChart :type="type" :data="data" :options="options" :settings="settings" />
</template>

<script>
import { GChart } from 'vue-google-charts/legacy';

import { chartType, chartData, chartOptions } from './GoogleChartData';

export default {
  name: 'GoogleChart',
  components: {
    GChart,
  },
  data() {
    return {
      type: chartType,
      data: chartData,
      options: chartOptions,
      settings: {
        packages: ['gauge'],
      },
    };
  },
};
</script>
