import React from 'react';
import {
  // mountWithTheme,
  renderWithTheme
  // shallowWithTheme
} from '@sfitzpatrick/enzyme-context-helpers';

import Alert from '../Alert';

describe('Alert', () => {
  const defaultProps = {
    title: 'Login Error'
  };

  // let wrapper, mountedWrapper;

  beforeEach(() => {
    // wrapper = shallowWithTheme(<Alert {...defaultProps} />);
    // mountedWrapper = mountWithTheme(<Alert {...defaultProps} />);
  });

  describe('Alert', () => {
    test('should render correctly', () => {
      // console.log(wrapper.debug());
      // console.log(mountedWrapper.debug());
    });
  });

  describe('snapshots', () => {
    test('should match for basic', () => {
      const snap = renderWithTheme(
        <Alert {...defaultProps}>This is an error</Alert>
      ).toJSON();
      expect(snap).toMatchSnapshot();
    });

    test('should match with button', () => {
      const snap = renderWithTheme(
        <Alert {...defaultProps} onCancel={() => {}}>
          This is an error
        </Alert>
      ).toJSON();
      expect(snap).toMatchSnapshot();
    });
  });
});
