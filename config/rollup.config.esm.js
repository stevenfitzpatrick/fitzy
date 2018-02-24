import pkg from '../package.json';
import config from './rollup.config';

// ES output
config.output.format = 'es';
config.output.file = 'lib/fitzy.esm.js';
config.external = ['react'].concat(Object.keys(pkg.dependencies));

export default config;
