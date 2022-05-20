<template>
  <div id="app">
    <GoogleChart />
  </div>
</template>

<script>
import GoogleChart from './components/google-chart/GoogleChart.vue';

export default {
  name: 'App',
  components: {
    GoogleChart,
  },
};
</script>
