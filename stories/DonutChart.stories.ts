import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/donut-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
};

export default {
  title: 'DonutChart',
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

export const DefaultDonutChart = Template.bind({});
DefaultDonutChart.args = { ...defaultArgs };
