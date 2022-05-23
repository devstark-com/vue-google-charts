import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'CandlestickChart';

export const data = [
  ['day', 'a', 'b', 'c', 'd'],
  ['Mon', 20, 28, 38, 45],
  ['Tue', 31, 38, 55, 66],
  ['Wed', 50, 55, 77, 80],
  ['Thu', 50, 77, 66, 77],
  ['Fri', 15, 66, 22, 68],
];

export const options = {
  legend: 'none',
  width: 800,
  height: 600,
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
      });
  },
});
