import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import Modal from '../Modal';
import { withTheme } from '../../../../test/helpers';

describe('Modal', () => {
  test('should render with children', () => {
    const handleClose = jest.fn();

    const { getByText, getByTestId } = render(
      withTheme(<Modal onClose={handleClose}>Modal Content</Modal>)
    );

    expect(getByText('Modal Content')).toBeTruthy();

    fireEvent.click(getByTestId('modal-close'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
