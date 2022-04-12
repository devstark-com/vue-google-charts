import { GChart } from 'vue-google-charts';

const defaultArgs = {
  type: 'AreaChart',
  chartData: [
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ],
  chartOptions: {
    title: 'Company Performance',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    chartArea: { width: '50%', height: '70%' },
    width: 800,
    height: 600,
  },
};

export default {
  title: 'AreaChart',
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

export const DefaultAreaChart = Template.bind({});
DefaultAreaChart.args = { ...defaultArgs };
