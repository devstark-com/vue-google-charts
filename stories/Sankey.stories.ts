import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/sankey-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
  settings: {
    packages: ['sankey'],
  },
};

export default {
  title: 'Sankey',
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

export const DefaultSankey = Template.bind({});
DefaultSankey.args = { ...defaultArgs };
