// cspell:words setstate, eqeqeq, iife

/* eslint-env node */

/*
    ESLint Rule Documentation Sites
        https://eslint.org/docs/rules/
        https://github.com/yannickcr/eslint-plugin-react
        https://github.com/benmosher/eslint-plugin-import
        https://github.com/testing-library/eslint-plugin-testing-library
        https://github.com/jest-community/eslint-plugin-jest
        https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
*/
const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  // Specifies the ESLint parser
  plugins: ["@typescript-eslint", "react"],
  env: {
    browser: true,
    jest: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "prettier", "plugin:storybook/recommended"],
  parserOptions: {
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    // Allows for the parsing of modern ECMAScript features
    sourceType: "module",
    // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    // These rules don't add much value, are better covered by TypeScript and good definition files
    "react/no-direct-mutation-state": "off",
    "react/no-deprecated": "off",
    "react/no-string-refs": "off",
    "react/require-render-return": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
