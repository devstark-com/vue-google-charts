export const chartType = 'AreaChart';

export const chartData = [
  ['Year', 'Sales', 'Expenses'],
  ['2013', 1000, 400],
  ['2014', 1170, 460],
  ['2015', 660, 1120],
  ['2016', 1030, 540],
];

export const chartOptions = {
  title: 'Company Performance',
  hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
  vAxis: { minValue: 0 },
  chartArea: { width: '50%', height: '70%' },
  width: 800,
  height: 600,
};
