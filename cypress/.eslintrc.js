/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  extends: getExtends(),
  plugins: getPlugins(),
  rules: getRules(),
  parserOptions: getParserOptions(),
  parser: "@typescript-eslint/parser",
  env: getEnv(),
  settings: getSettings(),
};

function getExtends() {
  return ["plugin:@typescript-eslint/recommended"];
}

function getPlugins() {
  return ["@typescript-eslint", "cypress", "no-only-tests"];
}

function getRules() {
  return {
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],
    "no-only-tests/no-only-tests": "error",
    "no-unused-vars": 0,
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "prefer-const": 2,
  };
}

function getParserOptions() {
  return {
    ecmaVersion: 12,
    project: [path.resolve(__dirname, "./tsconfig.json")],
  };
}

function getEnv() {
  return {
    es2021: true,
    "cypress/globals": true,
  };
}

function getSettings() {
  return {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  };
}
