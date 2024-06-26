module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'airbnb',
    'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next', 'react-hooks'],
  rules: {
    'import/extensions': 'off',
    'react/function-component-definition': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    'no-restricted-exports': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'no-unused-vars': 'warn',
    'no-param-reassign': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'max-len': [1, {
      ignoreComments: true,
      code: 110,
    }],
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],
    'i18next/no-literal-string': 2,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [{
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 0,
      'import/no-extraneous-dependencies': 'off',
      'react/jsx-props-no-spreading': 'off',
    },
  }],
};
