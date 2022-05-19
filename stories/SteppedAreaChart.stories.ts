import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/stepped-area-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
};

export default {
  title: 'SteppedAreaChart',
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

export const DefaultSteppedAreaChart = Template.bind({});
DefaultSteppedAreaChart.args = { ...defaultArgs };
