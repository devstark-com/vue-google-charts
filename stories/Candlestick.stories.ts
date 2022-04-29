import { GChart } from '../src';

const defaultArgs = {
  type: 'CandlestickChart',
  data: [
    ['day', 'a', 'b', 'c', 'd'],
    ['Mon', 20, 28, 38, 45],
    ['Tue', 31, 38, 55, 66],
    ['Wed', 50, 55, 77, 80],
    ['Thu', 50, 77, 66, 77],
    ['Fri', 15, 66, 22, 68],
  ],
  options: {
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

const Template = args => ({
  components: { GChart },
  setup() {
    return { args };
  },
  template: '<GChart v-bind="args" />',
});

export const DefaultCandlestick = Template.bind({});
DefaultCandlestick.args = { ...defaultArgs };
