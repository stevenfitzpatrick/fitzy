module.exports = {
  collectCoverageFrom: ['src/(components|utils)/**/*.{js}'],
  testMatch: ['<rootDir>/src/**/?(*)(Test).js?(x)'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['js', 'json'],
  modulePaths: ['<rootDir>/test'],
  setupTestFrameworkScriptFile: '<rootDir>/test/setupTests.js',
  setupFiles: ['<rootDir>/test/propCheck.js']
};
