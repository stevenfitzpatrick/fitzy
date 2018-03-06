import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import theme from '../src/theme/theme';

/**
 * Helper for React Create Renderer with theme
 */
export function renderWithTheme(component) {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  );
}

/**
 * Helper to wrap ThemeProvider for shallow / mount for enzyme
 */
export function _wrapWithTheme(fn, children, options) {
  const wrapper = fn(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    options
  );

  return wrapper[fn.name]({
    context: wrapper.instance().getChildContext()
  });
}

/**
 * Helper for shallow mount with theme
 */
export function shallowWithTheme() {
  return _wrapWithTheme(shallow, ...arguments);
}

/**
 * Helper for full mount with theme
 */
export function mountWithTheme() {
  return _wrapWithTheme(mount, ...arguments);
}
