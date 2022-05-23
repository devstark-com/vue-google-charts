import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/histogram-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
};

export default {
  title: 'Histogram',
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

export const DefaultHistogram = Template.bind({});
DefaultHistogram.args = { ...defaultArgs };
