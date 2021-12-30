import swc from 'rollup-plugin-swc';
import vue from 'rollup-plugin-vue';

import pkg from './package.json';

const external = _ => /node_modules/.test(_) && !/@swc\/helpers/.test(_);

const attachPlugins = (targets) => [
  vue(),
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

module.exports = [
  {
    input: "src/index.js",
    plugins: attachPlugins("defaults and supports es6-module"),
    output: {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    },
    external,
  },
  {
    input: "src/index.js",
    plugins: attachPlugins("defaults, not ie 11, not ie_mob 11"),
    output: {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    external,
  },
  {
    input: "src/wrapper.js",
    plugins: attachPlugins("defaults, not ie 11, not ie_mob 11"),
    output: {
      globals: {
        debounce: "debounce",
        vue: "vue"
      },
      file: pkg.unpkg,
      format: "umd",
      exports: "named",
      sourcemap: true
    },
    external,
  }
]
