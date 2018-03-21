import PropTypes from 'prop-types';
import React from 'react';

import FitzyIcon from './Icon.styled';
import icons from './icons';

function Icon({ icon, use, size, className }) {
  return (
    <FitzyIcon
      use={use}
      size={size}
      viewBox={icons[icon].viewBox}
      className={className}
    >
      <path d={icons[icon].path} />
    </FitzyIcon>
  );
}

Icon.propTypes = {
  /**
   * Name of the icon to use
   */
  icon: PropTypes.string.isRequired,
  /**
   * Style for the icon to use
   */
  use: PropTypes.oneOf([
    'current',
    'Primary',
    'Secondary',
    'Warning',
    'Error',
    'Info',
    'Light'
  ]),
  /**
   * Size of the icon
   */
  size: PropTypes.string
};

Icon.defaultProps = {
  use: 'current',
  size: '24'
};

export default Icon;
