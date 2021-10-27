module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb/base',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': 0,
    'no-plusplus': 'off',
    'no-tabs': 'off',
    'prefer-destructuring': 'off',
    'no-use-before-define': 'off',
  },
};
