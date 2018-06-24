import commonjs from 'rollup-plugin-commonjs';
import pkg from '../package.json';
import config from './rollup.config';

// CJS output
config.output.format = 'cjs';
config.output.exports = 'named';
config.output.file = 'lib/fitzy.cjs.js';
config.external = ['react', 'react-dom', 'styled-components'].concat(
  Object.keys(pkg.dependencies)
);
config.plugins = [
  ...config.plugins,
  commonjs({
    ignoreGlobal: true
  })
];

export default config;
