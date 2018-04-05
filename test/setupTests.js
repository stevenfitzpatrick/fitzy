import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { init } from '@sfitzpatrick/enzyme-context-helpers';
import 'jest-styled-components';

import theme from '../src/theme/theme';

configure({ adapter: new Adapter() });

init({ theme });
