import React from 'react';
import { shallow, mount } from 'enzyme';

import Toggle from '../Toggle';

describe('Toggle', () => {
  let wrapper;
  let mountedWrapper;
  let button;

  const onTogglespy = jest.fn().mockName('onToggle');

  const defaultProps = {
    onToggle: onTogglespy
  };

  beforeEach(() => {
    wrapper = shallow(
      <Toggle {...defaultProps}>
        <Toggle.Button />
      </Toggle>
    );
    mountedWrapper = mount(
      <Toggle {...defaultProps}>
        <Toggle.Button />
      </Toggle>
    );
    button = wrapper.find('ToggleButton');
  });

  afterEach(() => {
    onTogglespy.mockReset();
  });

  it('should render Toggle Button', () => {
    expect(mountedWrapper.is(Toggle)).toEqual(true);
    expect(wrapper.is('div')).toEqual(true);
    expect(button.props().on).toEqual(false);
  });

  describe('with Click Event', () => {
    it('should handle click event', () => {
      expect(onTogglespy).not.toBeCalled();
      expect(onTogglespy.mock.calls).toHaveLength(0);
      expect(wrapper.state().on).toEqual(false);
      button
        .shallow()
        .find('button')
        .simulate('click');
      expect(onTogglespy.mock.calls).toHaveLength(1);
      expect(wrapper.state().on).toEqual(true);
      expect(onTogglespy).toBeCalledWith(true);
      button
        .shallow()
        .find('button')
        .simulate('click');
      expect(onTogglespy.mock.calls).toHaveLength(2);
      expect(wrapper.state().on).toEqual(false);
      expect(onTogglespy).toBeCalledWith(false);
    });
  });

  describe('with On and Off Components', () => {
    beforeEach(() => {
      wrapper = mount(
        <Toggle {...defaultProps}>
          <Toggle.On>On</Toggle.On>
          <Toggle.Button />
          <Toggle.Off>Off</Toggle.Off>
        </Toggle>
      );
    });

    it('should show off button only', () => {
      expect(wrapper.find('ToggleOff').contains('Off')).toEqual(true);
      expect(wrapper.find('ToggleOn').contains('On')).toEqual(false);
    });

    it('should show on button only', () => {
      wrapper.setState({ on: true });
      expect(wrapper.find('ToggleOff').contains('Off')).toEqual(false);
      expect(wrapper.find('ToggleOn').contains('On')).toEqual(true);
    });
  });

  describe('with Controlled', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Toggle {...defaultProps} on={true}>
          <Toggle.Button />
        </Toggle>
      );
      button = wrapper.find('ToggleButton');
    });

    it('should be defaulted to on via prop', () => {
      expect(button.props().on).toEqual(true);
    });

    it('should call onToggle when clicked', () => {
      expect(onTogglespy).not.toBeCalled();
      expect(onTogglespy.mock.calls).toHaveLength(0);
      button
        .shallow()
        .find('button')
        .simulate('click');
      expect(onTogglespy.mock.calls).toHaveLength(1);
      expect(onTogglespy).toBeCalledWith(false);
    });
  });
});
