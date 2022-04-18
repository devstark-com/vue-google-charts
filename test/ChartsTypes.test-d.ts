//TODO: tune after migrate to Vue3
import Vue from 'vue';
import { GChart } from '../src/index';

import { GoogleViz } from '../src/types';

declare global {
  interface Window {
    google?: GoogleViz;
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

Vue.component('line-chart', {
  render: function (createElement) {
    return createElement(GChart, {
      props: {
        type: 'LineChart',
        data,
        options,
      },
    });
  },
});
