import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/gauge-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
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
