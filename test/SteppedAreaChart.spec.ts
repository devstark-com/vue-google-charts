import { shallowMount } from '@vue/test-utils';

import { GChart } from '../src';

describe('SteppedAreaChart', () => {
  const Component = {
    template:
      '<div><GChart :type="type" :data="data" :options="options"/></div>',
    components: { GChart },
    props: ['type', 'data', 'options'],
  };

  const type = 'SteppedAreaChart';

  const data = [
    ['Director (Year)', 'Rotten Tomatoes', 'IMDB'],
    ['Alfred Hitchcock (1935)', 8.4, 7.9],
    ['Ralph Thomas (1959)', 6.9, 6.5],
    ['Don Sharp (1978)', 6.5, 6.4],
    ['James Hawes (2008)', 4.4, 6.2],
  ];

  const options = {
    title: "The decline of 'The 39 Steps'",
    vAxis: { title: 'Accumulated Rating' },
    isStacked: true,
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
