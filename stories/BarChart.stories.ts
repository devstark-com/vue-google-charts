import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/bar-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
};

export default {
  title: 'BarChart',
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

export const DefaultBarChart = Template.bind({});
DefaultBarChart.args = { ...defaultArgs };
