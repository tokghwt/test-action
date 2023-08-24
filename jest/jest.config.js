module.exports = {
  // https://jestjs.io/docs/configuration
  rootDir: "..",
  testMatch: [
    "<rootDir>/jest/spec/dist/*.test.js",
  ],
  verbose: true,
  bail: true,
};
