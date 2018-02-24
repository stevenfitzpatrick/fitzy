import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-post-replace';
import resolve from 'rollup-plugin-node-resolve';

import pkg from '../package.json';

export default {
  input: 'src/fitzy.js',
  external: ['react'].concat(Object.keys(pkg.dependencies)),
  output: {
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
      downshift: 'Downshift',
      classnames: 'classnames',
      'styled-components': 'styled-components'
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
      presets: [
        [
          'env',
          {
            modules: false,
            loose: true,
            targets: {
              browsers: ['last 2 versions', 'IE >= 11']
            }
          }
        ],
        'react'
      ],
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
