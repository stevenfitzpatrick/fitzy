import React from 'react';
import { mount } from 'enzyme';

import Toggle from '../Toggle';

describe('Toggle', () => {
  const content = <span>Some Content</span>;
  const Child = jest.fn(({ isOpen, onToggle }) => (
    <React.Fragment>
      <button onClick={onToggle}>Toggle Me</button>
      {isOpen && content}
    </React.Fragment>
  ));

  it('should pass props to child', () => {
    mount(<Toggle>{Child}</Toggle>);

    expect(Child).toHaveBeenCalledWith(
      expect.objectContaining({ isOpen: false, onToggle: expect.any(Function) })
    );
  });

  it('should hide item by default', () => {
    const wrapper = mount(<Toggle>{Child}</Toggle>);
    expect(wrapper.contains(content)).toBeFalsy();
  });

  it('should show item if set via props', () => {
    const wrapper = mount(<Toggle isOpen>{Child}</Toggle>);
    expect(wrapper.contains(content)).toBeTruthy();
  });

  it('should be able to toggle on click', () => {
    const wrapper = mount(<Toggle>{Child}</Toggle>);

    expect(wrapper.contains(content)).toBeFalsy();

    const button = wrapper.find('button');

    button.simulate('click');

    expect(wrapper.contains(content)).toBeTruthy();
  });
});
