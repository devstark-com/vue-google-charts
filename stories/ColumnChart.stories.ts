import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/column-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
};

export default {
  title: 'ColumnChart',
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

export const DefaultColumn = Template.bind({});
DefaultColumn.args = { ...defaultArgs };
