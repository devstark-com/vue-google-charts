import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'CandlestickChart';

export const data = [
  ['Mon', 28, 28, 38, 38],
  ['Tue', 38, 38, 55, 55],
  ['Wed', 55, 55, 77, 77],
  ['Thu', 77, 77, 66, 66],
  ['Fri', 66, 66, 22, 22],
];

export const options = {
  legend: 'none',
  bar: { groupWidth: '100%' }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
    risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
  },
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
        isFirstRowLabels: true,
      });
  },
});
