const path = require('path');
const { version, name } = require('./package.json');

module.exports = {
  ribbon: {
    url: 'https://github.com/stevenfitzpatrick/fitzy',
    text: 'View me on GitHub'
  },
  title: `Fitzy | ${version}`,
  getComponentPathLine(componentPath) {
    const component = path.basename(componentPath, '.js');
    return `import { ${component} } from '${name}';`;
  },
  assetsDir: 'assets',
  styleguideDir: 'dist',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide-config/ThemeWrapper.js')
  },
  theme: {
    color: {
      ribbonBackground: '#2ab272'
    }
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700'
        }
      ]
    },
    body: {
      raw: '<div id="modalRoot"></div>'
    }
  },
  require: [path.join(__dirname, 'styleguide-config/reset.css')],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    }
  },
  showCode: false,
  showUsage: false,
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: ['-apple-system', 'BlinkMacSystemFont']
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
          path.resolve(__dirname, 'src/components/CheckBox', 'CheckBox.js'),
          path.resolve(__dirname, 'src/components/RadioGroup', 'RadioGroup.js'),
          path.resolve(__dirname, 'src/components/Toggle', 'Toggle.js'),
          path.resolve(__dirname, 'src/components/Password', 'Password.js'),
          path.resolve(__dirname, 'src/components/Dropdown', 'Dropdown.js'),
          path.resolve(
            __dirname,
            'src/components/AutoComplete',
            'AutoComplete.js'
          )
        ];
      }
    },
    {
      name: 'Components',
      components() {
        return [
          path.resolve(__dirname, 'src/components/Alert', 'Alert.js'),
          path.resolve(__dirname, 'src/components/Modal', 'Modal.js'),
          path.resolve(__dirname, 'src/components/Tag', 'Tag.js'),
          path.resolve(__dirname, 'src/components/TagInput', 'TagInput.js'),
          path.resolve(__dirname, 'src/components/Tabs', 'Tabs.js'),
          path.resolve(__dirname, 'src/components/Tooltip', 'Tooltip.js'),
          path.resolve(__dirname, 'src/components/Loader', 'Loader.js'),
          path.resolve(__dirname, 'src/components/Icon', 'Icon.js')
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
          ),
          path.resolve(__dirname, 'src/components/CollapseMe', 'CollapseMe.js')
        ];
      }
    },
    {
      name: 'Layout',
      components() {
        return [
          path.resolve(
            __dirname,
            'src/components/NavLink',
            'NavLink.styled.js'
          ),
          path.resolve(__dirname, 'src/components/Navigation', 'Navigation.js')
        ];
      }
    }
  ]
};
