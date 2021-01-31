module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'flowtype'],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    semi: ['error', 'never'],
    'no-extra-semi': 0,
    'react/react-in-jsx-scope': 0,
    'comma-dangle': 'off',
  },
}
