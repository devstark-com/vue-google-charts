import vue from '@vitejs/plugin-vue';
import swc from 'rollup-plugin-swc';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const extensions = ['.js', '.ts'];
export const external = _ => /node_modules/.test(_) && !/@swc\/helpers/.test(_);
export const plugins = (targets, vueLib, vueOptions = {}) => [
  vueLib(vueOptions),
  nodeResolve({
    extensions,
  }),
  replace({
    preventAssignment: true,
    values: {
      'process.env.VERSION': JSON.stringify(pkg.version),
    },
  }),
  swc({
    env: {
      targets,
    },
    module: {
      type: 'es6',
    },
    sourceMaps: true,
  }),
];

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
