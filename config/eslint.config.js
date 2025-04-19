module.exports = {
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["node_modules", "dist", ".eslintrc.js"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
    files: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"],
  },
  plugins: ["@stylistic/ts", "import"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:@stylistic/disable-legacy",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    // TypeScript Rules
    "@stylistic/ts/interface-name-prefix": "off",
    "@stylistic/ts/explicit-function-return-type": "off",
    "@stylistic/ts/explicit-module-boundary-types": "off",
    "@stylistic/ts/no-explicit-any": "off",
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
    "no-script-url": "error"
  },
  settings: {
    "import/resolver": {
      "typescript": {
        "project": "./tsconfig.json"
      }
    }
  },
  overrides: [
    {
      // Only apply React rules if React is detected in dependencies
      files: ["**/*.{tsx,jsx}"],
      settings: {
        react: {
          version: "detect"
        }
      },
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended"
      ],
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
  ]
};