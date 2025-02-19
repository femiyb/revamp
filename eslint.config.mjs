import js from "@eslint/js";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import next from "@next/eslint-plugin-next";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // ✅ Enable JSX parsing
        },
      },
    },
    plugins: {
      js,
      react,
      prettier,
      next, // ✅ Add Next.js ESLint Plugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      ...next.configs.recommended.rules, // ✅ Apply Next.js recommended rules
      "react/react-in-jsx-scope": "off", // ✅ Fix React 18+ JSX scope issue
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  configPrettier,
];
