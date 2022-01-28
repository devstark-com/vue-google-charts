import vue from 'rollup-plugin-vue';
import swc from 'rollup-plugin-swc';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const extensions = ['.js', '.ts'];
const external = _ => /node_modules/.test(_) && !/@swc\/helpers/.test(_);
const plugins = (targets, vueOptions = {}) => [
  vue(vueOptions),
  nodeResolve({
    extensions,
  }),
  replace({
    preventAssignment: true,
    values: {
      'import.meta.env.VERSION': JSON.stringify(pkg.version),
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
    input: 'src/index.js',
    plugins: plugins('defaults and supports es6-module'),
    external,
    output: {
      format: 'esm',
      file: pkg.module,
    },
  },
  {
    input: 'src/index.js',
    plugins: plugins('defaults, not ie 11, not ie_mob 11', {
      template: {
        optimizeSSR: true,
      },
    }),
    external,
    output: {
      format: 'cjs',
      file: pkg.main,
    },
  },
  {
    input: 'src/umd.js',
    plugins: [...plugins('defaults, not ie 11, not ie_mob 11'), commonjs()],
    output: {
      format: 'umd',
      file: pkg.unpkg,
    },
  },
];
