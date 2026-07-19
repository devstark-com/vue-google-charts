import { mount } from '@vue/test-utils';

import { GChart } from '../src';

describe('GChart resize listener', () => {
  it('removes on unmount the same resize listener it added', () => {
    const add = jest.spyOn(window, 'addEventListener');
    const remove = jest.spyOn(window, 'removeEventListener');

    const wrapper = mount(GChart, { props: { type: 'LineChart' } });

    const resizeHandler = add.mock.calls.find(call => call[0] === 'resize')?.[1];
    expect(resizeHandler).toBeDefined();

    wrapper.unmount();

    expect(remove).toHaveBeenCalledWith('resize', resizeHandler);

    add.mockRestore();
    remove.mockRestore();
  });
});
