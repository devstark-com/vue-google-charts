import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/gantt-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
  settings: {
    packages: ['gantt'],
  },
};

export default {
  title: 'GanttChart',
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

export const DefaultGanttChart = Template.bind({});
DefaultGanttChart.args = { ...defaultArgs };
