import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'OrgChart';

export const data = [
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
];

export const options = {
  width: 800,
  height: 600,
  allowHtml: true,
};

export default defineComponent({
  name: 'GoogleChart',
  components: {
    GChart,
  },
  setup() {
    return () =>
      h(GChart, {
        data,
        options,
        type,
        settings: {
          packages: ['orgchart'],
        },
      });
  },
});
