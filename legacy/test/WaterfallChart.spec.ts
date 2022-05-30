import { shallowMount } from '@vue/test-utils';

import { GChart } from '../src';

import {
  chartType,
  chartData,
  chartOptions,
} from '../sandboxes/waterfall-chart/src/components/google-chart/GoogleChartData';

describe('WaterfallChart', () => {
  const Component = {
    template:
      '<div><GChart :type="type" :data="data" :options="options" :isFirstRowLabels="isFirstRowLabels"/></div>',
    components: { GChart },
    props: ['type', 'data', 'options', 'isFirstRowLabels'],
  };

  const type = chartType;

  const data = chartData;

  const options = chartOptions;

  const isFirstRowLabels = true;

  it('should render a chart', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        type,
        data,
        options,
        isFirstRowLabels,
      },
    });

    const chart = wrapper.find('gchart-stub');
    expect(chart.attributes('type')).toBe(type);
    expect(chart.attributes('data')).toBe(data.flat().join(','));
  });
});
