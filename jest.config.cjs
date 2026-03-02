/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      { tsconfig: 'tsconfig.test.json', diagnostics: false },
    ],
  },
  moduleNameMapper: {
    '^ui_library/(.*)$': '<rootDir>/src/__mocks__/ui_library/$1.mock',
    '^login_app/(.*)$': '<rootDir>/src/__mocks__/login_app/$1.mock',
    '^dashboard_app/(.*)$': '<rootDir>/src/__mocks__/dashboard_app/$1.mock',
    '\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/styleMock.mock.ts',
    '^(\\..*)\\.tsx?$': '$1',
  },
  setupFiles: ['<rootDir>/src/testUtils/polyfills.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/testUtils/setup.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'cobertura', 'html'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
