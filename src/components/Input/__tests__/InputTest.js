import React from 'react';
import {
  mountWithTheme,
  renderWithTheme,
  shallowWithTheme
} from '@sfitzpatrick/enzyme-context-helpers';

import Input from '../Input';

describe('Input', () => {
  let wrapper, shallowWrapper;
  let input;

  const onChangeSpy = jest.fn().mockName('onChange');
  const onBlurSpy = jest.fn().mockName('onBlur');

  const defaultProps = {
    type: 'text',
    value: 'test',
    name: 'name',
    placeholder: 'Enter Name',
    onChange: onChangeSpy,
    onBlur: onBlurSpy
  };

  const funkyProps = {
    ...defaultProps,
    spellCheck: false,
    autoComplete: 'username',
    autoFocus: true
  };

  beforeEach(() => {
    wrapper = mountWithTheme(<Input type="text" {...defaultProps} />);
    shallowWrapper = shallowWithTheme(<Input type="text" {...defaultProps} />);
    input = wrapper.find('input');
  });

  afterEach(() => {
    onChangeSpy.mockReset();
  });

  test('should match snapshot with label', () => {
    const tree = renderWithTheme(
      <Input type="text" {...defaultProps} label="My Name" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render Input field with type text', () => {
    expect(wrapper.find('Input')).toHaveLength(1);
    expect(shallowWrapper.dive().is('label')).toBeTruthy();
    expect(input.props().type).toEqual('text');
  });

  test('should handle default props', () => {
    expect(input.props().placeholder).toEqual('Enter Name');
    expect(input.props().disabled).toEqual(false);
    expect(input.props().type).toEqual('text');
  });

  test('should set id based on name if no id entered', () => {
    expect(input.props().id).toEqual(defaultProps.name);
  });

  test('should call onChange when text entered', () => {
    expect(onChangeSpy.mock.calls).toHaveLength(0);
    input.simulate('change', { target: { value: 'new' } });
    expect(onChangeSpy.mock.calls).toHaveLength(1);
    expect(onChangeSpy.mock.calls[0][1]).toBe('new');
  });

  test('should call onBlur when leaving input', () => {
    expect(onBlurSpy.mock.calls).toHaveLength(0);
    input.simulate('blur', { target: { value: 'new' } });
    expect(onBlurSpy.mock.calls).toHaveLength(1);
  });

  describe('with Label', () => {
    beforeEach(() => wrapper.setProps({ label: 'Name:' }));

    test('should render label when set', () => {
      expect(wrapper.find('label')).toHaveLength(2);
    });

    test('should set text and for correctly', () => {
      const inputLabel = wrapper.find('label').last();
      expect(inputLabel.text()).toEqual('Name:');
      expect(inputLabel.props().htmlFor).toEqual('name');
    });
  });

  describe('with Hint', () => {
    let hint;

    beforeEach(() => {
      wrapper.setProps({ hint: 'Only Unique' });
      hint = wrapper.find('p');
    });

    test('should render hint when set', () => {
      expect(hint).toHaveLength(1);
      expect(hint.containsMatchingElement(<p>Only Unique</p>)).toEqual(true);
    });

    test('should set text correctly', () => {
      expect(hint.text()).toEqual('Only Unique');
    });
  });

  describe('with Funky Props', () => {
    test('should display all extra funky props', () => {
      wrapper.setProps({ ...funkyProps });
      const funkyInput = wrapper.find('input');
      expect(Object.keys(funkyInput.props())).toEqual(
        expect.arrayContaining(Object.keys(funkyProps))
      );
    });
  });
});
