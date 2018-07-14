import React from 'react';
import { findById } from 'helpers';

import { mountWithTheme } from '@sfitzpatrick/enzyme-context-helpers';
import AutoComplete from '../Autocomplete';

// Default Props
const onChangeSpy = jest.fn().mockName('onChangeSpy');
const items = [
  {
    value: '1',
    label: 'Cards'
  },
  {
    value: '2',
    label: 'Planes'
  }
];

function renderComponent({
  defaultProps = {
    onChange: onChangeSpy,
    items,
    inputId: 'autocomplete-input',
    itemToString: item => (item ? item.label : '')
  },
  props
} = {}) {
  return mountWithTheme(<AutoComplete {...defaultProps} {...props} />);
}

describe('AutoComplete', () => {
  afterEach(() => {
    onChangeSpy.mockReset();
  });

  describe('Icons', () => {
    test('it should arrow icon by default without value', () => {
      const wrapper = renderComponent();
      expect(wrapper.find('Icon').props().icon).toEqual('arrow');
    });

    test('it should close icon with value', () => {
      const wrapper = renderComponent({
        props: { defaultSelectedItem: 'one' }
      });
      expect(wrapper.find('Icon').props().icon).toEqual('close');
    });
  });

  describe('Actions', () => {
    test('it should handle clearing the default value', () => {
      const defaultValue = items[0];
      const wrapper = renderComponent({
        props: { defaultSelectedItem: defaultValue }
      });

      expect(onChangeSpy).not.toHaveBeenCalled();
      expect(wrapper.find('input').props().value).toEqual(defaultValue.label);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('input').props().value).toBeFalsy();
      expect(onChangeSpy).toHaveBeenCalled();
    });

    test('it should handle open the menu via arrow', () => {
      const wrapper = renderComponent();

      expect(wrapper.find('ul')).toHaveLength(0);
      wrapper.find('Icon').simulate('click');
      expect(onChangeSpy).not.toHaveBeenCalled();

      expect(wrapper.find('ul')).toHaveLength(1);
      expect(wrapper.find('li')).toHaveLength(items.length);
    });

    test('it should typing new values in input', () => {
      const wrapper = renderComponent();

      const input = wrapper.find(findById('autocomplete-input')).first();

      input.simulate('change', {
        target: {
          value: 'Pl'
        }
      });
      expect(wrapper.find('li').text()).toEqual('Planes');

      input.simulate('change', {
        target: {
          value: 'car'
        }
      });
      expect(wrapper.find('li').text()).toEqual('Cards');

      input.simulate('change', {
        target: {
          value: 'nonsense'
        }
      });
      expect(wrapper.find('li').exists()).toBeFalsy();
    });
  });
});
