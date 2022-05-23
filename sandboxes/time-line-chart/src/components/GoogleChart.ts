import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

const columns = [
  { type: 'string', id: 'President' },
  { type: 'date', id: 'Start' },
  { type: 'date', id: 'End' },
];

const rows = [
  ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
  ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
  ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
];

export const type = 'Timeline';

export const data = [columns, ...rows];

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
          packages: ['timeline'],
        },
      });
  },
});
