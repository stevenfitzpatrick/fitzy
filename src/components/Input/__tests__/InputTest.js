import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('Input', () => {
  let wrapper;
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
    wrapper = shallow(<Input type="text" {...defaultProps} />);
    input = wrapper.find('input');
  });

  afterEach(() => {
    onChangeSpy.mockReset();
  });

  it('should render Input field with type text', () => {
    expect(wrapper.childAt(0).type()).toEqual('input');
    expect(input.props().type).toEqual('text');
  });

  it('should handle default props', () => {
    expect(input.props().placeholder).toEqual('Enter Name');
    expect(input.props().disabled).toEqual(false);
  });

  it('should set id based on name if no id entered', () => {
    expect(input.props().id).toEqual(defaultProps.name);
  });

  it('should call onChange when text entered', () => {
    expect(onChangeSpy.mock.calls).toHaveLength(0);
    input.simulate('change', { target: { value: 'new' } });
    expect(onChangeSpy.mock.calls).toHaveLength(1);
    expect(onChangeSpy.mock.calls[0][1]).toBe('new');
  });

  it('should call onBlur when leaving input', () => {
    expect(onBlurSpy.mock.calls).toHaveLength(0);
    input.simulate('blur', { target: { value: 'new' } });
    expect(onBlurSpy.mock.calls).toHaveLength(1);
  });

  describe('with Label', () => {
    beforeEach(() => wrapper.setProps({ label: 'Name:' }));

    it('should render label when set', () => {
      expect(wrapper.childAt(0).type()).toEqual('label');
    });

    it('should set text and for correctly', () => {
      expect(wrapper.childAt(0).text()).toEqual('Name:');
      expect(wrapper.childAt(0).props().htmlFor).toEqual('name');
    });
  });

  describe('with Hint', () => {
    let hint;

    beforeEach(() => {
      wrapper.setProps({ hint: 'Only Unique' });
      hint = wrapper.find('p');
    });

    it('should render hint when set', () => {
      expect(hint).toHaveLength(1);
      expect(hint.containsMatchingElement(<p>Only Unique</p>)).toEqual(true);
    });

    it('should set text correctly', () => {
      expect(hint.text()).toEqual('Only Unique');
    });
  });

  describe('with Checkbox', () => {
    beforeEach(() => {
      wrapper.setProps({ type: 'checkbox' });
      input = wrapper.find('input');
    });

    it('should render type of checkbox', () => {
      expect(input.props().type).toEqual('checkbox');
    });

    it('should call onChange with checked value', () => {
      expect(onChangeSpy).not.toBeCalled();
      const event = { target: { checked: false } };
      input.simulate('change', event);
      expect(onChangeSpy).toBeCalled();
      expect(onChangeSpy).toBeCalledWith(event, false);
    });
  });

  describe('with TextArea', () => {
    beforeEach(() => {
      wrapper.setProps({ type: 'textarea' });
      input = wrapper.find('textarea');
    });

    it('should render type of checkbox', () => {
      expect(input.props().type).toEqual('textarea');
      expect(input.is('textarea')).toEqual(true);
    });
  });

  describe('with Funky Props', () => {
    it('should display all extra funky props', () => {
      wrapper.setProps({ ...funkyProps });
      const funkyInput = wrapper.find('input');
      expect(Object.keys(funkyInput.props())).toEqual(
        expect.arrayContaining(Object.keys(funkyProps))
      );
    });
  });
});
