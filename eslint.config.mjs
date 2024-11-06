import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Basic recommended JS config
  pluginJs.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', // Ensure ESLint knows where your TypeScript config is
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly', // Define React as a global variable
        JSX: 'readonly',   // Define JSX as a global variable
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off', // Disable no-require-imports rule
      'react/react-in-jsx-scope': 'off',             // Disable the requirement for React in scope
    },
  },

  {
    ignores: ['.docusaurus', 'build'], // Ignore both .docusaurus and build folders
  },
];
