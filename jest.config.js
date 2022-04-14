module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/test/(*.)spec.(js|ts)'],
  moduleFileExtensions: ['js', 'ts', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue2-jest',
    // TODO: replace with @swc/jest after code migration to typescript
    '\\.js$': ['babel-jest', { configFile: './babel-jest.config.js' }],
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/*'],
  coverageReporters: ['lcovonly', 'text'],
};
