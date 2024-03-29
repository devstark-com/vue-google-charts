module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/test/(*.)spec.(js|ts)'],
  moduleFileExtensions: ['js', 'ts', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        module: {
          type: 'commonjs',
        },
        env: {
          targets: {
            node: 12,
          },
        },
      },
    ],
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/*'],
  coverageReporters: ['lcovonly', 'text'],
  moduleNameMapper: {
    'vue-google-charts': '<rootDir>/src/',
  },
};
