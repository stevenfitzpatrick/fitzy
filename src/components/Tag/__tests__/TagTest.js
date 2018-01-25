import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../Tag';

describe('Tag', () => {
  let wrapper, button;
  const onRemoveSpy = jest.fn().mockName('onRemove');
  const onKeyDownSpy = jest.fn().mockName('onKeyDown');

  const defaultProps = {
    tagId: 1,
    onRemove: onRemoveSpy,
    onKeyDown: onKeyDownSpy
  };

  beforeEach(() => {
    wrapper = shallow(<Tag {...defaultProps}>Test</Tag>);
    button = wrapper.find('button');
  });

  afterEach(() => {
    onRemoveSpy.mockReset();
    onKeyDownSpy.mockReset();
  });

  it('should render Tag correctly', () => {
    expect(wrapper.is('div')).toBeTruthy();
    expect(wrapper.contains(<span>Test</span>)).toEqual(true);
    expect(wrapper.find('span')).toHaveLength(1);

    expect(wrapper.containsMatchingElement(<button />)).toEqual(true);
    expect(button).toHaveLength(1);
  });

  it('should add data-id attribute based on tagId', () => {
    expect(button.prop('data-id')).toEqual(1);
  });

  describe('with Events', () => {
    it('should fire onRemove when button is clicked', () => {
      expect(onRemoveSpy).not.toHaveBeenCalled();
      button.simulate('click');
      expect(onRemoveSpy).toHaveBeenCalled();
      expect(onKeyDownSpy).not.toHaveBeenCalled();
    });

    it('should fire onKeyDown when backspace or delete is pressed', () => {
      expect(onKeyDownSpy).not.toHaveBeenCalled();
      button.simulate('keydown', { key: 'backspace', keyCode: 8, which: 8 });
      expect(onKeyDownSpy).toHaveBeenCalled();
    });
  });
});
