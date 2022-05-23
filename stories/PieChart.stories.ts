import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/pie-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
};

export default {
  title: 'PieChart',
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

export const DefaultPieChart = Template.bind({});
DefaultPieChart.args = { ...defaultArgs };
