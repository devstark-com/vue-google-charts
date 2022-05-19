import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/word-tree-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
  settings: {
    packages: ['wordtree'],
  },
};

export default {
  title: 'WordTreeChart',
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

export const DefaultWordTreeChart = Template.bind({});
DefaultWordTreeChart.args = { ...defaultArgs };
