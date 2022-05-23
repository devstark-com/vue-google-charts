const columns = [
  { type: 'string', id: 'President' },
  { type: 'date', id: 'Start' },
  { type: 'date', id: 'End' },
];

const rows = [
  ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
  ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
  ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
];

export const chartType = 'Timeline';

export const chartData = [columns, ...rows];

export const chartOptions = {
  width: 800,
  height: 600,
};
