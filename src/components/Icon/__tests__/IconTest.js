import React from 'react';
import {
  mountWithTheme,
  renderWithTheme
} from '@sfitzpatrick/enzyme-context-helpers';

import Icon from '../Icon';
import icons from '../../Icon/icons';

describe('Icons', () => {
  let wrapper, component;

  const icon = 'close';

  const defaultProps = {
    icon,
    size: '16'
  };

  beforeEach(() => {
    component = <Icon {...defaultProps} />;
    wrapper = mountWithTheme(component);
  });

  test('should match snapshot', () => {
    const snap = renderWithTheme(component).toJSON();
    expect(snap).toMatchSnapshot();
    expect(snap).toHaveStyleRule('fill', 'currentColor');
    expect(snap).toHaveStyleRule('height', '16px');
    expect(snap).toHaveStyleRule('width', '16px');
  });

  test('should render Icon', () => {
    expect(wrapper.is(Icon)).toBeTruthy();
  });

  test('should render correct SVG for requested icon', () => {
    expect(wrapper.find('svg')).toHaveLength(1);
    expect(wrapper.find('path').props().d).toEqual(icons[icon].path);
  });
});
