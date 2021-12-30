import vue from 'rollup-plugin-vue';

function createBuild(config) {
  return {
    ...config,
    plugins: [
      vue()
    ]
  }
}

const fileName = "vue-google-charts"

module.exports = [
  createBuild({
    input: "src/index.js",

    output: {
      format: "esm",
      exports: "named",
      file: `dist/${fileName}.esm.js`
    },
  }),
  createBuild({
    input: "src/index.js",

    output: {
      format: "cjs",
      exports: "named",
      file: `dist/${fileName}.cjs.js`
    },
  }),
  createBuild({
    input: "src/wrapper.js",

    output: {
      globals: {
        debounce: "debounce",
        vue: "vue"
      },
      format: "umd",
      file: `dist/${fileName}.browser.js`
    },
  }),
]
