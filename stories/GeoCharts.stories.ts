import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/geo-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
  settings: {
    packages: ['geochart'],
  },
};

export default {
  title: 'GeoChart',
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

export const DefaultGeoChart = Template.bind({});
DefaultGeoChart.args = { ...defaultArgs };
