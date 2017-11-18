module.exports = {
    parser: 'babel-eslint',
    extends: 'eslint:recommended',
    plugins: ['react', 'jsx-a11y', 'import'],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-const-assign': 2,
        'prefer-spread': 2,
        'no-useless-concat': 2,
        'no-var': 2,
        'object-shorthand': 2,
        'prefer-arrow-callback': 2
    }
};
