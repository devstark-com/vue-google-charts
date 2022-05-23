import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/area-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
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
