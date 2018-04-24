import React from 'react';

import Layout from './Layout';
import { FitzyHeader, FitzyNavigation } from './Navigation.styled';

const Navigation = ({ children }) => (
  <FitzyHeader>{children(Layout)}</FitzyHeader>
);

export default Navigation;
