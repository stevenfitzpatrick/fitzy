import React from 'react';
import { oneOf, string } from 'prop-types';

import Icon from '../Icon/Icon';
import { COLOR_THEMES } from '../../utils/propTypes';
import { FitzyIconButton } from './IconButton.styled';

const IconButton = ({ icon, use, ...props }) => {
  return (
    <FitzyIconButton {...props}>
      <Icon icon={icon} size="24" use={use} />
    </FitzyIconButton>
  );
};

IconButton.propTypes = {
  icon: string.isRequired,
  use: oneOf(COLOR_THEMES)
};

IconButton.defaultProps = {
  use: 'Primary'
};

export default IconButton;
