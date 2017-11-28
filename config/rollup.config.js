import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-post-replace';
import buble from 'rollup-plugin-buble';

export default {
    strict: true,
    input: 'src/fitzy.js',
    external: ['react'],
    globals: {
        react: 'React'
    },
    useStrict: false,
    exports: 'named',
    output: {
        format: 'iife',
        file: 'lib/fitzy.dev.js',
        name: 'fitzy',
        sourcemap: true
    },
    plugins: [
        resolve(),
        // remove Babel helpers
        replace({
            'throw ': 'return; throw '
        }),
        buble()
        // babel({
        //     sourceMap: true,
        //     exclude: 'node_modules/**',
        //     babelrc: true
        // })
    ]
};
