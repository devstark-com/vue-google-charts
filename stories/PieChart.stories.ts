import { GChart } from '../src';

const defaultArgs = {
  type: 'PieChart',
  chartData: [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ],
  chartOptions: {
    title: 'My Daily Activities',
    width: 800,
    height: 600,
  },
};

export default {
  title: 'PieChart',
  component: GChart,
  parameters: {
    layout: 'centered',
  },
  args: defaultArgs,
};

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GChart },
  template: '<GChart :type="type" :data="chartData" :options="chartOptions"/>',
});

export const DefaultPieChart = Template.bind({});
DefaultPieChart.args = { ...defaultArgs };
