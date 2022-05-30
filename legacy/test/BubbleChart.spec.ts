import { shallowMount } from '@vue/test-utils';

import { GChart } from '../src';

import {
  chartType,
  chartData,
  chartOptions,
} from '../sandboxes/bubble-chart/src/components/google-chart/GoogleChartData';

describe('BubbleChart', () => {
  const Component = {
    template:
      '<div><GChart :type="type" :data="data" :options="options"/></div>',
    components: { GChart },
    props: ['type', 'data', 'options'],
  };

  const type = chartType;

  const data = chartData;

  const options = chartOptions;

  it('should render a chart', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        type,
        data,
        options,
      },
    });

    const chart = wrapper.find('gchart-stub');
    expect(chart.attributes('type')).toBe(type);
    expect(chart.attributes('data')).toBe(data.flat().join(','));
  });
});
