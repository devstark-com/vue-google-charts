import { GChart } from 'vue-google-charts';

const defaultArgs = {
  type: 'ScatterChart',
  chartData: [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2008', 1030, 540],
    ['2009', 1000, 400],
    ['2010', 1170, 460],
    ['2011', 660, 1120],
    ['2012', 1030, 540],
  ],
  chartOptions: {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' },
    width: 800,
    height: 600,
  },
};

export default {
  title: 'ScatterChart',
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

export const DefaultScatterChart = Template.bind({});
DefaultScatterChart.args = { ...defaultArgs };
