module.exports = {
  // https://eslint.org/docs/latest/use/configure/
  root: true,
  env: {
    node: true,
    es2021: true,  // https://github.com/nodejs/release#release-schedule , https://github.com/tsconfig/bases
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    sourceType: "module",
  },
};
