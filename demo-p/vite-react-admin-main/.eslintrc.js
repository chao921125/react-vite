module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // 指定ESLint可以解析JSX语法
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended", // Make sure this is always the last element in the array.
  ],
  plugins: [
    "simple-import-sort",
    "prettier",
    "@typescript-eslint",
    "react",
    "react-hooks",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  globals: {
    NodeJS: true,
    require: true,
    process: true,
    $request: true,
    $message: true,
  },
  settings: {
    // 自动发现React的版本，从而进行规范react代码
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react/prop-types": "off",
    // "simple-import-sort/imports": "error",
    // "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "off", // 关闭排序校验
    "simple-import-sort/exports": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-non-null-assertion': 0, //允许用断言
  },
};
