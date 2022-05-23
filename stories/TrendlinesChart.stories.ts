import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/trendlines-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
};

export default {
  title: 'TrendlinesChart',
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

export const DefaultTrendlinesChart = Template.bind({});
DefaultTrendlinesChart.args = { ...defaultArgs };
