import { createApp } from 'vue';

import { loadGoogleCharts } from './lib/google-charts-loader';
import { GChart } from './components/GChart';

const app = createApp({});

// Install the components
export function install() {
  app.component('GChart', GChart);
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
}

if (GlobalVue !== null && GlobalVue !== undefined) {
  app.use(plugin);
}
