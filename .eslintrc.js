module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  plugins: ['jest', 'react', 'jsx-a11y', 'import'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-const-assign': 2,
    'prefer-spread': 2,
    'no-useless-concat': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1
  }
};
