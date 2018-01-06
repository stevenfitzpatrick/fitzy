import React from 'react';
import { shallow } from 'enzyme';

import EventManager from '../EventManager';

describe('EventManager', () => {
  let wrapper;
  let input;
  let instance;

  // Main Props
  const onFocusSpy = jest.fn().mockName('onFocusSpy');
  const onBlurSpy = jest.fn().mockName('onBlur');
  const onMouseLeaveSpy = jest.fn().mockName('onMouseLeave');
  const onMouseEnterSpy = jest.fn().mockName('onMouseEnter');
  const onMouseOverSpy = jest.fn().mockName('onMouseOver');

  // User Defined Extra Callback Prop
  const onFocusCallbackSpy = jest.fn().mockName('onFocusCallbackSpy');

  const defaultProps = {
    onFocus: onFocusSpy,
    onBlur: onBlurSpy,
    onMouseLeave: onMouseLeaveSpy,
    onMouseEnter: onMouseEnterSpy,
    onMouseOver: onMouseOverSpy
  };

  beforeEach(() => {
    wrapper = shallow(
      <EventManager {...defaultProps}>
        {({ getProps }) => {
          return (
            <div
              {...getProps({
                onFocus: onFocusCallbackSpy,
                id: 'focusInput'
              })}
            />
          );
        }}
      </EventManager>
    );
    instance = wrapper.instance();
  });

  afterEach(() => {
    onFocusSpy.mockReset();
    onBlurSpy.mockReset();
    onFocusCallbackSpy.mockReset();
    onMouseLeaveSpy.mockReset();
    onMouseEnterSpy.mockReset();
    onMouseOverSpy.mockReset();
  });

  it('should render children without crashing', () => {
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.instance()).toBeInstanceOf(EventManager);
  });

  it('should pass all props', () => {
    expect(wrapper.props()).toHaveProperty('onFocus');
    expect(wrapper.props()).toHaveProperty('onBlur');
    expect(wrapper.props()).toHaveProperty('onMouseEnter');
    expect(wrapper.props()).toHaveProperty('onMouseLeave');
    expect(wrapper.props()).toHaveProperty('onMouseOver');
  });

  describe('getProps', () => {
    it('should return correct props', () => {
      const getProps = instance.getProps();
      expect(Object.keys(getProps)).toEqual([
        'onBlur',
        'onFocus',
        'onMouseEnter',
        'onMouseLeave',
        'onMouseOver'
      ]);
    });

    it('should pass extra props', () => {
      const getProps = instance.getProps({ id: 1 });
      expect(Object.keys(getProps)).toContain('id');
    });
  });

  describe('with Event Changes', () => {
    it('should fire onFocus', () => {
      expect(onFocusSpy.mock.calls).toHaveLength(0);
      wrapper.simulate('focus', { target: { value: 'new' } });
      expect(onFocusSpy).toHaveBeenCalled();
    });

    it('should fire onFocusCallback first and then onFocus', () => {
      expect(onFocusCallbackSpy.mock.calls).toHaveLength(0);
      expect(onFocusSpy.mock.calls).toHaveLength(0);
      wrapper.simulate('focus', { target: { value: 'new' } });
      expect(onFocusCallbackSpy).toHaveBeenCalled();
      expect(onFocusSpy).toHaveBeenCalled();
    });

    it('should fire onBlur', () => {
      expect(onBlurSpy.mock.calls).toHaveLength(0);
      wrapper.simulate('blur', { target: { value: 'new' } });
      expect(onBlurSpy).toHaveBeenCalled();
    });

    it('should fire onMouseLeave', () => {
      expect(onMouseLeaveSpy.mock.calls).toHaveLength(0);
      wrapper.simulate('mouseLeave', { target: { value: 'new' } });
      expect(onMouseLeaveSpy).toHaveBeenCalled();
    });

    it('should fire onMouseEnter', () => {
      expect(onMouseEnterSpy.mock.calls).toHaveLength(0);
      wrapper.simulate('mouseEnter', { target: { value: 'new' } });
      expect(onMouseEnterSpy).toHaveBeenCalled();
    });

    it('should fire onMouseOver', () => {
      expect(onMouseOverSpy.mock.calls).toHaveLength(0);
      wrapper.simulate('mouseOver', { target: { value: 'new' } });
      expect(onMouseOverSpy).toHaveBeenCalled();
    });
  });
});
