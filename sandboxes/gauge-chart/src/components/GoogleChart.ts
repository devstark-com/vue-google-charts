import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'Gauge';

export const data = [
  ['Label', 'Value'],
  ['Memory', 80],
  ['CPU', 55],
  ['Network', 68],
];

export const options = {
  width: 800,
  height: 600,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5,
};

export default defineComponent({
  name: 'GoogleChart',
  components: {
    GChart,
  },
  setup() {
    return () =>
      h(GChart, {
        data,
        options,
        type,
        settings: {
          packages: ['gauge'],
        },
      });
  },
});
