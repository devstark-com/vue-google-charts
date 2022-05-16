import { GChart } from '../src';

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

const defaultArgs = {
  type: 'Timeline',
  data: [columns, ...rows],
  options: {
    width: 800,
    height: 600,
  },
  settings: {
    packages: ['timeline'],
  },
};

export default {
  title: 'TimeLineChart',
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

export const DefaultTimeLineChart = Template.bind({});
DefaultTimeLineChart.args = { ...defaultArgs };
