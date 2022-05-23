import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/time-line-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
  settings: {
    packages: ['timeline'],
  },
};

export default {
  title: 'TimeLineChart',
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

export const DefaultTimeLineChart = Template.bind({});
DefaultTimeLineChart.args = { ...defaultArgs };
