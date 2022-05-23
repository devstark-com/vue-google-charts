import { GChart } from '../src';

import {
  type,
  data,
  options,
} from '../sandboxes/org-chart/src/components/GoogleChart';

const defaultArgs = {
  type,
  data,
  options,
  settings: {
    packages: ['orgchart'],
  },
};

export default {
  title: 'OrgChart',
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

export const DefaultOrgChart = Template.bind({});
DefaultOrgChart.args = { ...defaultArgs };
