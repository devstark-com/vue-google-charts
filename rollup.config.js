import vue from 'rollup-plugin-vue'
import replace from "@rollup/plugin-replace";
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const commonPlugins = [
  replace({
    preventAssignment: true,
    values: {
      VERSION: JSON.stringify(pkg.version)
    }
  }),
]

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: pkg.module
    },
    plugins: [
      ...commonPlugins,
      vue()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: pkg.main
    },
    plugins: [
      ...commonPlugins,
      vue({ template: { optimizeSSR: true } })
    ]
  },
  {
    input: 'src/wrapper.js',
    output: {
      format: 'iife',
      file: pkg.unpkg
    },
    plugins: [
      ...commonPlugins,
      nodeResolve(),
      commonjs(),
      vue()
    ]
  }
]
