  import vue from 'rollup-plugin-vue';
  import swc from 'rollup-plugin-swc';
  import replace from "@rollup/plugin-replace";
  import commonjs from '@rollup/plugin-commonjs';
  import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const extensions = ['.js', '.ts'];
const external = _ => /node_modules/.test(_) && !/@swc\/helpers/.test(_);

const plugins = targets => [
  nodeResolve({
    extensions
  }),
  replace({
    preventAssignment: true,
    values: {
      'import.meta.env.VERSION': JSON.stringify(pkg.version)
    }
  }),
  swc({
    env: {
      targets
    },
    module: {
      type: "es6"
    },
    sourceMaps: true
  })
]

export default [
  {
    external,
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: pkg.module
    },
    plugins: [
      vue(),
      ...plugins("defaults and supports es6-module"),
    ]
  },
  {
    external,
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: pkg.main
    },
    plugins: [
      vue({ template: { optimizeSSR: true } }),
      ...plugins("defaults, not ie 11, not ie_mob 11"),
    ]
  },
  {
    input: 'src/umd.js',
    output: {
      format: 'umd',
      file: pkg.unpkg
    },
    plugins: [
      vue(),
      ...plugins("defaults, not ie 11, not ie_mob 11"),
      commonjs(),
    ]
  }
]
