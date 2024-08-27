/* eslint-disable no-undef */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    // transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };
  /* eslint-enable no-undef */
  