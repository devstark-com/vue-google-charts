import { GChart } from '../src';

const defaultArgs = {
  type: 'OrgChart',
  data: [
    [
      {
        v: 'Mike',
        f: 'Mike<div style="color:red; font-style:italic">President</div>',
      },
      '',
      'The President',
    ],
    [
      {
        v: 'Jim',
        f: 'Jim<div style="color:red; font-style:italic">Vice President</div>',
      },
      'Mike',
      'VP',
    ],
    ['Alice', 'Mike', ''],
    ['Bob', 'Jim', 'Bob Sponge'],
    ['Carol', 'Bob', ''],
  ],
  options: {
    width: 800,
    height: 600,
    allowHtml: true,
  },
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
