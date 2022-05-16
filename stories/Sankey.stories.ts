import { GChart } from '../src';

const defaultArgs = {
  type: 'Sankey',
  data: [
    ['From', 'To', 'Weight'],
    ['A', 'X', 5],
    ['A', 'Y', 7],
    ['A', 'Z', 6],
    ['B', 'X', 2],
    ['B', 'Y', 9],
    ['B', 'Z', 4],
  ],
  options: {
    width: 800,
    height: 600,
  },
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
