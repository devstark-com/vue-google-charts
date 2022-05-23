import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'GeoChart';

export const data = [
  ['Country', 'Popularity'],
  ['Germany', 200],
  ['United States', 300],
  ['Brazil', 400],
  ['Canada', 500],
  ['France', 600],
  ['RU', 700],
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
          packages: ['geochart'],
        },
      });
  },
});
