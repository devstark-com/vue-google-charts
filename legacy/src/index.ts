import Vue from 'vue';

import { loadGoogleCharts } from '../../src/lib/google-charts-loader';
import GChart from './components/GChart.vue';

// Install the components
export function install(vue: typeof Vue) {
  vue.component('GChart', GChart);
}

// Expose the components
export { loadGoogleCharts, GChart };

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  version: process.env.VERSION,
  install,
};

export default plugin;

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
