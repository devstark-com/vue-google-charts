import { shallowMount } from '@vue/test-utils';

import { GChart } from '../src';

describe('LineChart', () => {
  const Component = {
    template:
      '<div><GChart :type="type" :data="data" :options="options"/></div>',
    components: { GChart },
    props: ['type', 'data', 'options'],
  };

  const type = 'LineChart';

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
