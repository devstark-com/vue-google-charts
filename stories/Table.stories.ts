import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/table-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
};

export default {
  title: 'Table',
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

export const DefaultTable = Template.bind({});
DefaultTable.args = { ...defaultArgs };
