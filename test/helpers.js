import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';

export const findById = id => `[id="${id}"]`;

export const withTheme = component => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);
