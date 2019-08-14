/* eslint-disable quotes */

module.exports = {
  testEnvironment: 'node',
  testMatch: null,
  testRegex: '/@tests/.*\\.test\\.(js|ts)$',
  setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1"
  }
}
