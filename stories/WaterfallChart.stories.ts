import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/waterfall-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
  isFirstRowLabels: true,
};

export default {
  title: 'WaterfallChart',
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

export const DefaultWaterfallChart = Template.bind({});
DefaultWaterfallChart.args = { ...defaultArgs };
