import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/candlestick-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
};

export default {
  title: 'CandlestickChart',
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

export const DefaultCandlestick = Template.bind({});
DefaultCandlestick.args = { ...defaultArgs };
