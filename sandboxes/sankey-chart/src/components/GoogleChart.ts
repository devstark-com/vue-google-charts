import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'Sankey';

export const data = [
  ['From', 'To', 'Weight'],
  ['A', 'X', 5],
  ['A', 'Y', 7],
  ['A', 'Z', 6],
  ['B', 'X', 2],
  ['B', 'Y', 9],
  ['B', 'Z', 4],
];

export const options = {
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
        settings: {
          packages: ['sankey'],
        },
      });
  },
});
