module.exports = {
  root: true,

  parser: 'vue-eslint-parser',

  parserOptions: {
    sourceType: 'module',
  },

  extends: [
    'plugin:vue/base',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/essential',
    'prettier',
  ],

  env: {
    browser: true,
  },

  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // trailing comma
    // 'comma-dangle': ['error', 'always-multiline'],
  },
};
