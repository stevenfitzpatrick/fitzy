import PropTypes from 'prop-types';
import React from 'react';

import Layout from './Layout';
import { FitzyHeader, FitzyNavigation } from './Navigation.styled';

const Navigation = ({ children, isFixed, className }) => (
  <FitzyHeader className={className} isFixed={isFixed}>
    {children(Layout)}
  </FitzyHeader>
);

Navigation.propTypes = {
  isFixed: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
};

Navigation.defaultProps = {
  isFixed: true,
  className: ''
};

export default Navigation;
