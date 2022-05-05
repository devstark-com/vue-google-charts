import vue from 'rollup-plugin-vue2';

import pkg from './package.json';

import { external, plugins } from '../rollup.config';

export default [
  {
    input: pkg.main,
    plugins: plugins('defaults and supports es6-module', vue),
    external,
    output: {
      format: 'es',
      file: pkg.publishConfig.module,
      sourcemap: true,
    },
  },
  {
    input: pkg.main,
    plugins: plugins('defaults, not ie 11, not ie_mob 11', vue, {
      template: {
        optimizeSSR: true,
      },
    }),
    external,
    output: {
      format: 'cjs',
      file: pkg.publishConfig.main,
      exports: 'named',
      sourcemap: true,
    },
  },
];
