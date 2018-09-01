import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from 'react-testing-library';
import { configure } from 'enzyme';
import { init } from '@sfitzpatrick/enzyme-context-helpers';
import 'jest-dom/extend-expect';
import 'jest-styled-components';

import theme from '../src/theme/theme';

configure({ adapter: new Adapter() });

init({ theme });

// Cleanup tests
afterEach(cleanup);

// Set up modal root
let modalRoot = document.getElementById('modalRoot');

if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modalRoot');
  document.body.appendChild(modalRoot);
}
