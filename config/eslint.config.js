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
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
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
    ]
  },
  settings: {
    "import/resolver": {
      "typescript": {
        "project": "./tsconfig.json"
      }
    }
  }
};