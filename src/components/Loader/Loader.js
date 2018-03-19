import PropTypes from 'prop-types';
import React from 'react';

import { Circle, FitzyLoader } from './Loader.styled';

function Loader({ size, use }) {
  return (
    <FitzyLoader size={size} use={use}>
      <Circle />
      <Circle alternate />
    </FitzyLoader>
  );
}

Loader.propTypes = {
  size: PropTypes.number,
  use: PropTypes.oneOf(['Primary', 'Secondary', 'Warning', 'Error', 'Info', 'Light'])
};

Loader.defaultProps = {
  size: 60,
  use: 'Primary'
};

export default Loader;
