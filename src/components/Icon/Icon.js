import PropTypes from 'prop-types';
import React from 'react';

import FitzyIcon from './Icon.styled';
import icons from './icons/index';

function Icon({ icon, use, size, className, ...props }) {
  // Check if icon exists
  const selectedIcon = icons[icon];
  if (!selectedIcon) return null;

  return (
    <FitzyIcon
      use={use}
      size={size}
      viewBox={selectedIcon.viewBox}
      className={className}
      {...props}
    >
      {selectedIcon.child ? selectedIcon.child : <path d={selectedIcon.path} />}
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
