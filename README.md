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