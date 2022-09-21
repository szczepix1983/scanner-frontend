module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transformIgnorePatterns: ['node_modules/(?!(jest-test|@ngrx))'],
};
