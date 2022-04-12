import { GChart } from 'vue-google-charts';

const defaultArgs = {
  type: 'CandlestickChart',
  chartData: [
    ['day', 'a', 'b', 'c', 'd'],
    ['Mon', 20, 28, 38, 45],
    ['Tue', 31, 38, 55, 66],
    ['Wed', 50, 55, 77, 80],
    ['Thu', 50, 77, 66, 77],
    ['Fri', 15, 66, 22, 68],
  ],
  chartOptions: {
    legend: 'none',
    width: 800,
    height: 600,
  },
};

export default {
  title: 'CandlestickChart',
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

export const DefaultCandlestick = Template.bind({});
DefaultCandlestick.args = { ...defaultArgs };
