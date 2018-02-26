const path = require('path');
const { createConfig, babel, postcss, match, css } = require('webpack-blocks');
const { version, name } = require('./package.json');

module.exports = {
  title: `Fitzy | ${version}`,
  getComponentPathLine(componentPath) {
    const component = path.basename(componentPath, '.js');
    return `import { ${component} } from '${name}';`;
  },
  assetsDir: 'assets',
  styleguideDir: 'dist',
  template: path.join(__dirname, 'styleguide-config/template.html'),
  require: [path.join(__dirname, 'styleguide-config/reset.css')],
  webpackConfig: createConfig([
    babel(),
    match(['*.css', '!*node_modules*'], [css(), postcss()])
  ]),
  showCode: false,
  showUsage: false,
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Source Sans Pro'
      }
    }
  },
  sections: [
    {
      name: 'Forms',
      components() {
        return [
          path.resolve(__dirname, 'src/components/Input', 'Input.js'),
          path.resolve(__dirname, 'src/components/Button', 'Button.js'),
          path.resolve(__dirname, 'src/components/RadioGroup', 'RadioGroup.js'),
          path.resolve(__dirname, 'src/components/Toggle', 'Toggle.js'),
          path.resolve(__dirname, 'src/components/Password', 'Password.js'),
          path.resolve(__dirname, 'src/components/Dropdown', 'Dropdown.js')
        ];
      }
    },
    {
      name: 'Components',
      components() {
        return [
          path.resolve(__dirname, 'src/components/Tag', 'Tag.js'),
          path.resolve(__dirname, 'src/components/TagInput', 'TagInput.js'),
          path.resolve(__dirname, 'src/components/Tabs', 'Tabs.js')
        ];
      }
    },
    {
      name: 'Declarative',
      components() {
        return [
          path.resolve(
            __dirname,
            'src/components/EventManager',
            'EventManager.js'
          )
        ];
      }
    }
  ]
};
