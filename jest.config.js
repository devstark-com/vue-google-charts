module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/test/(*.)spec.(js|ts)'],
  moduleFileExtensions: ['js', 'ts', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue2-jest',
    // TODO: replace with @swc/jest after code migration to typescript
    '\\.js$': [
      'babel-jest',
      {
        presets: ['@vue/cli-plugin-babel/preset'],
        plugins: ['babel-plugin-transform-import-meta'],
      },
    ],
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/*'],
  coverageReporters: ['lcovonly', 'text'],
};
