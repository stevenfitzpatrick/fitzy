import React from 'react';
import renderer from 'react-test-renderer';

import Alert from '../Alert';

describe('Alert', () => {
  describe('snapshots', () => {
    test('should match for basic', () => {
      const snap = renderer.create(<Alert>This is an error</Alert>).toJSON();
      expect(snap).toMatchSnapshot();
    });

    test('should match with button', () => {
      const snap = renderer
        .create(<Alert onCancelu={() => {}}>This is an error</Alert>)
        .toJSON();
      expect(snap).toMatchSnapshot();
    });
  });
});
