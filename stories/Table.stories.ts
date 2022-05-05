import { GChart } from '../src';

const defaultArgs = {
  type: 'Table',
  data: [
    ['Name', 'Salary', 'Full time employee'],
    ['Mike', { v: 10000, f: '$10,000' }, true],
    ['Jim', { v: 8000, f: '$8,000' }, false],
    ['Alice', { v: 12500, f: '$12,500' }, true],
    ['Bob', { v: 7000, f: '$7,000' }, true],
  ],
  options: {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' },
    pageSize: 1,
    width: 800,
    height: 600,
  },
};

export default {
  title: 'Table',
  component: GChart,
  parameters: {
    layout: 'centered',
  },
  args: defaultArgs,
};

const Template = args => ({
  components: { GChart },
  setup() {
    return { args };
  },
  template: '<GChart v-bind="args" />',
});

export const DefaultTable = Template.bind({});
DefaultTable.args = { ...defaultArgs };
