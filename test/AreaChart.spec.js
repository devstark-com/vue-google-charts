import { shallowMount } from '@vue/test-utils';

import { GChart } from '../src/index.js';

describe('AreaChart', () => {
  const Component = {
    template:
      '<div><GChart :type="type" :data="data" :options="options"/></div>',
    components: { GChart },
    props: ['type', 'data', 'options'],
  };

  const type = 'AreaChart';

  const data = [
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ];

  const options = {
    title: 'Company Performance',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    chartArea: { width: '50%', height: '70%' },
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
