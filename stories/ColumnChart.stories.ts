import { GChart } from '../src';

const defaultArgs = {
  type: 'ColumnChart',
  chartData: [
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350],
  ],
  chartOptions: {
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
    width: 800,
    height: 600,
  },
};

export default {
  title: 'ColumnChart',
  component: GChart,
  parameters: {
    layout: 'centered',
  },
  args: defaultArgs,
};

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GChart },
  template: '<GChart :type="type" :data="chartData" :options="chartOptions"/>',
});

export const DefaultColumn = Template.bind({});
DefaultColumn.args = { ...defaultArgs };
