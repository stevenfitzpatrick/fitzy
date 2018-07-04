module.exports = {
  collectCoverageFrom: ['src/(components|utils)/**/*.{js}'],
  testMatch: ['<rootDir>/src/**/?(*)(Test).js?(x)'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['js', 'json'],
  setupTestFrameworkScriptFile: '<rootDir>/test/setupTests.js'
};
