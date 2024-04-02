/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@my-site/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
};
