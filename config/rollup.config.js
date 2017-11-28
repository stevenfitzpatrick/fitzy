import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
    strict: true,
    input: 'src/fitzy.js',
    external: ['react'],
    globals: {
        react: 'React'
    },
    exports: 'named',
    output: {
        format: 'iife',
        file: 'lib/fitzy.dev.js',
        name: 'fitzy',
        sourcemap: true
    },
    plugins: [
        resolve(),
        babel({
            externalHelpers: true,
            sourceMap: true,
            exclude: 'node_modules/**',
            babelrc: true
        })
    ]
};
