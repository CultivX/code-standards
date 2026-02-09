import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import pluginTypescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  {
    ignores: ["node_modules", "dist"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
      globals: {
        node: true,
        jest: true,
      },
    },
    plugins: {
      '@stylistic': stylistic,
      import: pluginImport,
      prettier: pluginPrettier,
      '@typescript-eslint': pluginTypescriptEslint,
    },
    rules: {
      // TypeScript Rules
      "@stylistic/interface-name-prefix": "off",
      "@stylistic/explicit-function-return-type": "off",
      "@stylistic/explicit-module-boundary-types": "off",
      "@stylistic/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports"
        }
      ],

      // Import Rules
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          "pathGroups": [
            {
              "pattern": "@/**",
              "group": "internal",
              "position": "after"
            }
          ],
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ],
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "import/no-cycle": "error",

      // General Rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",

      // Security Rules
      "no-eval": "error",
      "no-unsafe-finally": "error",
      "no-implied-eval": "error",
      "no-script-url": "error",

      // Prettier Rules
      "prettier/prettier": "error",
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true, // Recommended for TypeScript projects
          // "project" is intentionally left out here to allow the consuming project's
          // tsconfig.json to be discovered automatically by eslint-import-resolver-typescript
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"],
        },
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      // Optional: if you use specific extensions beyond .js, .jsx, .ts, .tsx
      // "import/extensions": [
      //   ".ts", ".tsx", ".js", ".jsx"
      // ],
    },
  },
  // React configuration for tsx/jsx files
  {
    files: ["**/*.{tsx,jsx}"],
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      // React specific rules
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/prop-types": "off", // Not needed with TypeScript
      "react/display-name": "off",
      "react/jsx-sort-props": [
        "error",
        {
          "callbacksLast": true,
          "shorthandFirst": true,
          "ignoreCase": true,
          "reservedFirst": true
        }
      ],
      "react/jsx-curly-brace-presence": ["error", { "props": "never", "children": "never" }],
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-fragments": ["error", "syntax"],
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-pascal-case": "error",
      "react/no-array-index-key": "warn",
      "react/no-unused-prop-types": "error",
      "react/self-closing-comp": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Additional React Rules
      "react/function-component-definition": [
        "error",
        {
          "namedComponents": "arrow-function",
          "unnamedComponents": "arrow-function"
        }
      ],
      "react/no-unstable-nested-components": "error",
      "react/jsx-max-depth": ["error", { "max": 5 }]
    }
  }
];