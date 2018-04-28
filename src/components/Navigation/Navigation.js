import PropTypes from 'prop-types';
import React from 'react';

import Layout from './Layout';
import { FitzyHeader, FitzyNavigation } from './Navigation.styled';

const Navigation = ({ children, isFixed }) => (
  <FitzyHeader isFixed={isFixed}>{children(Layout)}</FitzyHeader>
);

Navigation.propTypes = {
  isFixed: PropTypes.bool
};

Navigation.defaultProps = {
  isFixed: false
};

export default Navigation;
