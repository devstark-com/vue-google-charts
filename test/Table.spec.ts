import { shallowMount } from '@vue/test-utils';

import { GChart } from '../src/index';

describe('Table', () => {
  const Component = {
    template:
      '<div><GChart :type="type" :data="data" :options="options"/></div>',
    components: { GChart },
    props: ['type', 'data', 'options'],
  };

  const type = 'Table';

  const data = [
    ['Name', 'Salary', 'Full time employee'],
    ['Mike', { v: 10000, f: '$10,000' }, true],
    ['Jim', { v: 8000, f: '$8,000' }, false],
    ['Alice', { v: 12500, f: '$12,500' }, true],
    ['Bob', { v: 7000, f: '$7,000' }, true],
  ];

  const options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' },
    pageSize: 1,
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
