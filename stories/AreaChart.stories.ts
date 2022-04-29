import { GChart } from '../src';

const defaultArgs = {
  type: 'AreaChart',
  data: [
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ],
  options: {
    title: 'Company Performance',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    chartArea: { width: '50%', height: '70%' },
    width: 800,
    height: 600,
  },
};

export default {
  title: 'AreaChart',
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

export const DefaultAreaChart = Template.bind({});
DefaultAreaChart.args = { ...defaultArgs };
