# @cultivx/code-standards

CultivX's shared ESLint and Prettier configuration for TypeScript and React projects.

## Installation

```bash
pnpm add https://github.com/cultivx/code-standards
```

## Usage

### ESLint Configuration

Create or update your `.eslintrc.js`:

```javascript
const { eslintConfig } = require('@cultivx/code-standards');

module.exports = eslintConfig;
```

### Prettier Configuration

Create or update your `.prettierrc.js`:

```javascript
const { prettierConfig } = require('@cultivx/code-standards');

module.exports = prettierConfig;
```

### Package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "lint:fix": "eslint . --ext .ts,.tsx,.js,.jsx --fix",
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