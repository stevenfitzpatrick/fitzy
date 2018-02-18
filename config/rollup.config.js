import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-post-replace';
import babel from 'rollup-plugin-babel';

import pkg from '../package.json';

export default {
  input: 'src/fitzy.js',
  external: ['react'].concat(Object.keys(pkg.dependencies)),
  output: {
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
      downshift: 'Downshift'
    },
    strict: true,
    exports: 'named',
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
    babel({
      exclude: 'node_modules/**',
      presets: [['env', { modules: false, loose: true }], 'react'],
      babelrc: false,
      plugins: [
        //'transform-react-remove-prop-types',
        'external-helpers',
        'transform-object-rest-spread',
        'transform-class-properties'
      ]
    })
  ]
};
