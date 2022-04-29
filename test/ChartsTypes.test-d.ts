import Vue, { h } from 'vue';
import { expectError } from 'tsd';

import { GChart } from '../src';

import { GoogleViz } from '../src/types';

declare global {
  interface Window {
    google?: GoogleViz;
    Vue?: typeof Vue;
  }
}

const data = [
  ['Year', 'Sales', 'Expenses'],
  ['2004', 1000, 400],
  ['2005', 1170, 460],
  ['2006', 660, 1120],
  ['2007', 1030, 540],
];

const options = {
  title: 'Company Performance',
  curveType: 'function',
  legend: { position: 'bottom' },
  width: 800,
  height: 600,
};

h(GChart, {
  type: 'AreaChart',
});

h(GChart, {
  type: 'Histogram',
});

h(GChart, {
  type: 'Timeline',
});

expectError(
  h(GChart, {
    type: 'UnknownChart',
  })
);

h(GChart, {
  type: 'AreaChart',
  data: data,
});

expectError(
  h(GChart, {
    type: 'AreaChart',
    data: 'data',
  })
);

h(GChart, {
  type: 'AreaChart',
  data: data,
  options: options,
});
