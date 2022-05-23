import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/combo-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
};

export default {
  title: 'ComboChart',
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

export const DefaultComboChart = Template.bind({});
DefaultComboChart.args = { ...defaultArgs };
