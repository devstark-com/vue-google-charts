import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/scatter-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
};

export default {
  title: 'ScatterChart',
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

export const DefaultScatterChart = Template.bind({});
DefaultScatterChart.args = { ...defaultArgs };
