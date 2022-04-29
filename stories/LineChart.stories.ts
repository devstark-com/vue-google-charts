import { GChart } from '../src';

const defaultArgs = {
  type: 'LineChart',
  data: [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540],
  ],
  options: {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' },
    width: 800,
    height: 600,
  },
};

export default {
  title: 'LineChart',
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

export const DefaultLineChart = Template.bind({});
DefaultLineChart.args = { ...defaultArgs };
