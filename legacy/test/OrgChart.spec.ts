import { shallowMount } from '@vue/test-utils';

import { GChart } from '../src';

import {
  chartType,
  chartData,
  chartOptions,
} from '../sandboxes/org-chart/src/components/google-chart/GoogleChartData';

describe('OrgChart', () => {
  const Component = {
    template:
      '<div><GChart :type="type" :data="data" :options="options" :settings="settings"/></div>',
    components: { GChart },
    props: ['type', 'data', 'options', 'settings'],
  };

  const type = chartType;

  const data = chartData;

  const options = chartOptions;

  const settings = {
    packages: ['orgchart'],
  };

  it('should render a chart', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        type,
        data,
        options,
        settings,
      },
    });

    const chart = wrapper.find('gchart-stub');
    expect(chart.attributes('type')).toBe(type);
    expect(chart.attributes('data')).toBe(data.flat().join(','));
  });
});
