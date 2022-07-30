const path = require("path");

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
  coverageDirectory: "coverage",
  coverageReporters: ["text-summary", "lcov"],
  testMatch: ["<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 50,
      lines: 50,
      statements: 80,
    },
  },
  errorOnDeprecated: false,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg|bmp|woff|woff2|ttf)$": "<rootDir>/test/mocks/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "test/(.*)$": "<rootDir>/test/$1",
    "~/(.*)$": "<rootDir>/src/$1",
    "@helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "~hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "@components/(.*)$": "<rootDir>/src/components/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  globalTeardown: "<rootDir>/test/teardown.ts",

  verbose: true,
  testEnvironment: "jsdom",
};
