export const chartType = 'SteppedAreaChart';

export const chartData = [
  ['Director (Year)', 'Rotten Tomatoes', 'IMDB'],
  ['Alfred Hitchcock (1935)', 8.4, 7.9],
  ['Ralph Thomas (1959)', 6.9, 6.5],
  ['Don Sharp (1978)', 6.5, 6.4],
  ['James Hawes (2008)', 4.4, 6.2],
];

export const chartOptions = {
  title: "The decline of 'The 39 Steps'",
  vAxis: { title: 'Accumulated Rating' },
  isStacked: true,
  width: 800,
  height: 600,
};
