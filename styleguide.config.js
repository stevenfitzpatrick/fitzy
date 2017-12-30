const path = require('path');
const { createConfig, babel, postcss } = require('webpack-blocks');
const { version, name } = require('./package.json');

module.exports = {
    title: `Fitzy | ${version}`,
    getComponentPathLine(componentPath) {
        const component = path.basename(componentPath, '.js');
        return `import { ${component} } from '${name}';`;
    },
    styleguideDir: 'dist',
    webpackConfig: createConfig([babel(), postcss()]),
    showCode: false,
    showUsage: false,
    sections: [
        {
            name: 'Components',
            components() {
                return [
                    path.resolve(
                        __dirname,
                        'src/components/ScrollToTop',
                        'ScrollToTop.js'
                    )
                ];
            }
        },
        {
            name: 'Forms',
            components() {
                return [
                    path.resolve(__dirname, 'src/components/Input', 'Input.js'),
                    path.resolve(__dirname, 'src/components/RadioGroup', 'RadioGroup.js')
                ];
            }
        }
    ]
};
