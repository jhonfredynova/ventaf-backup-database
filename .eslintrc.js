module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'google'
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single']
  }
};
