import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'Table';

export const data = [
  ['Name', 'Salary', 'Full time employee'],
  ['Mike', { v: 10000, f: '$10,000' }, true],
  ['Jim', { v: 8000, f: '$8,000' }, false],
  ['Alice', { v: 12500, f: '$12,500' }, true],
  ['Bob', { v: 7000, f: '$7,000' }, true],
];

export const options = {
  title: 'Company Performance',
  curveType: 'function',
  legend: { position: 'bottom' },
  pageSize: 1,
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
