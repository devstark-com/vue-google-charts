import { GChart } from '../src';

const defaultArgs = {
  type: 'BarChart',
  chartData: [
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000],
  ],
  chartOptions: {
    title: 'Population of Largest U.S. Cities',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Total Population',
      minValue: 0,
    },
    vAxis: {
      title: 'City',
    },
    width: 800,
    height: 600,
  },
};

export default {
  title: 'BarChart',
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

export const DefaultBarChart = Template.bind({});
DefaultBarChart.args = { ...defaultArgs };
