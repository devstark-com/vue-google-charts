import { GChart } from '../src';

const defaultArgs = {
  type: 'Gauge',
  data: [
    ['Label', 'Value'],
    ['Memory', 80],
    ['CPU', 55],
    ['Network', 68],
  ],
  options: {
    width: 800,
    height: 600,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5,
  },
  settings: {
    packages: ['gauge'],
  },
};

export default {
  title: 'GaugeChart',
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

export const DefaultGaugeChart = Template.bind({});
DefaultGaugeChart.args = { ...defaultArgs };
