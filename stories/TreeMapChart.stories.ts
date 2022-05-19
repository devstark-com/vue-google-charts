import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/tree-map-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
  settings: {
    packages: ['treemap'],
  },
};

export default {
  title: 'TreeMapChart',
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

export const DefaultTreeMapChart = Template.bind({});
DefaultTreeMapChart.args = { ...defaultArgs };
