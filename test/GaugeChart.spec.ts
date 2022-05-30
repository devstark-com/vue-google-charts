import { shallowMount } from '@vue/test-utils';

import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/gauge-chart/src/components/GoogleChart';

describe('GaugeChart', () => {
  const Component = {
    template:
      '<div><GChart :type="type" :data="data" :options="options" :settings="settings"/></div>',
    components: { GChart },
    props: ['type', 'data', 'options', 'settings'],
  };

  const settings = {
    packages: ['gauge'],
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

    const chart = wrapper.find('g-chart-stub');
    expect(chart.attributes('type')).toBe(type);
    expect(chart.attributes('data')).toBe(data.flat().join(','));
  });
});
