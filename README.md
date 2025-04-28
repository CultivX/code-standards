# @cultivx/code-standards

CultivX's shared ESLint and Prettier configuration for TypeScript and React projects.

## Installation

```bash
pnpm add @cultivx/code-standards
```

## Usage

This package uses ES modules and requires Node.js environments that support ES modules.

### ESLint Configuration

Create your `eslint.config.js` file in the root of your project:

```javascript
import { eslintConfig } from '@cultivx/code-standards';

export default eslintConfig;
```

### Prettier Configuration

Create your `.prettierrc.js` file in the root of your project:

```javascript
import { prettierConfig } from '@cultivx/code-standards';

export default prettierConfig;
```

### Package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\""
  }
}
```

### VSCode Integration

To integrate with VSCode, follow these steps:

1. Install the VSCode extensions:
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

2. Add the following settings to your VSCode settings.json:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.experimental.useFlatConfig": true
}
```

This configuration:
- Uses Prettier as the default formatter (runs on save)
- Runs ESLint fixes on save
- Enables support for ESLint's flat config format

## Known Issues

### prettier-eslint Compatibility

As of ESLint 9.x, some options used by `prettier-eslint` have been removed, which may cause errors like:

```
Invalid Options:
- Unknown options: ignorePath, resolvePluginsRelativeTo, rulePaths, useEslintrc
```

**Workaround:**
Use ESLint and Prettier separately instead of using `prettier-eslint`:

1. Remove `prettier-eslint` from your dependencies
2. Use separate commands for linting and formatting:
   ```json
   {
     "scripts": {
       "lint": "eslint .",
       "lint:fix": "eslint . --fix",
       "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\"",
       "check": "pnpm format && pnpm lint:fix"
     }
   }
   ```

## Features

- TypeScript support
- React and React Hooks support
- Prettier integration
- Modern JavaScript features
- Consistent code style across CultivX projects
- ESLint flat config format (ESLint 9.0.0+)

## Rules

### ESLint Rules

- TypeScript-specific rules configured for optimal development experience
- React and React Hooks best practices
- Import/export rules
- Unused variables handling with special patterns for ignored variables

### Prettier Rules

- 2 spaces indentation
- Single quotes
- No semicolons
- ES5 trailing commas
- Consistent arrow function parentheses
- Proper bracket spacing

## Requirements

- Node.js >= 16
- pnpm >= 8
- ESLint >= 9.0.0
- Prettier >= 3.0.0

## Contributing

To contribute to this package:

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Make your changes
4. Submit a pull request

## License

ISC