import { GChart } from '../src';

const defaultArgs = {
  type: 'GeoChart',
  data: [
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700],
  ],
  options: {
    width: 800,
    height: 600,
  },
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
