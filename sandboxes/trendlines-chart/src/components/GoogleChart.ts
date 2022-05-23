import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'ScatterChart';

export const data = [
  ['Diameter', 'Age'],
  [8, 37],
  [4, 19.5],
  [11, 52],
  [4, 22],
  [3, 16.5],
  [6.5, 32.8],
  [14, 72],
];

export const options = {
  title: 'Age of sugar maples vs. trunk diameter, in inches',
  hAxis: { title: 'Diameter' },
  vAxis: { title: 'Age' },
  legend: 'none',
  trendlines: { 0: {} }, // Draw a trendline for data series 0.
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
