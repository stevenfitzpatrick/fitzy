import React from 'react';
import renderer from 'react-test-renderer';

import Alert from '../Alert';

describe('Alert', () => {
  const defaultProps = {
    title: 'Login Error'
  };

  describe('snapshots', () => {
    test('should match for basic', () => {
      const snap = renderer
        .create(<Alert {...defaultProps}>This is an error</Alert>)
        .toJSON();
      expect(snap).toMatchSnapshot();
    });

    test('should match with button', () => {
      const snap = renderer
        .create(
          <Alert {...defaultProps} onCancel={() => {}}>
            This is an error
          </Alert>
        )
        .toJSON();
      expect(snap).toMatchSnapshot();
    });
  });
});
