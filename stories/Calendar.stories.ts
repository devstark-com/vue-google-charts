import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/calendar-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
  settings: {
    packages: ['calendar'],
  },
};

export default {
  title: 'CalendarChart',
  component: GChart,
  parameters: {
    layout: 'centered',
  },
  args: defaultArgs,
};

const Template = args => ({
  components: { GChart },
  setup() {
    return { args };
  },
  template: '<GChart v-bind="args" />',
});

export const DefaultCalendarChart = Template.bind({});
DefaultCalendarChart.args = { ...defaultArgs };
