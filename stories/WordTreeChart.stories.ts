import { GChart } from '../src';

const defaultArgs = {
  type: 'WordTree',
  data: [
    ['Phrases'],
    ['cats are better than dogs'],
    ['cats eat kibble'],
    ['cats are better than hamsters'],
    ['cats are awesome'],
    ['cats are people too'],
    ['cats eat mice'],
    ['cats meowing'],
    ['cats in the cradle'],
    ['cats eat mice'],
    ['cats in the cradle lyrics'],
    ['cats eat kibble'],
    ['cats for adoption'],
    ['cats are family'],
    ['cats eat mice'],
    ['cats are better than kittens'],
    ['cats are evil'],
    ['cats are weird'],
    ['cats eat mice'],
  ],
  options: {
    wordtree: {
      format: 'implicit',
      word: 'cats',
    },
    width: 800,
    height: 600,
  },
  settings: {
    packages: ['wordtree'],
  },
};

export default {
  title: 'WordTreeChart',
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

export const DefaultWordTreeChart = Template.bind({});
DefaultWordTreeChart.args = { ...defaultArgs };
