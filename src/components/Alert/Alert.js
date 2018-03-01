import PropTypes from 'prop-types';
import React from 'react';

import { FitzyAlert, FitzyClose } from './Alert.styled';

function Alert({ onCancel, type, className, children }) {
  return (
    <FitzyAlert role="alert" type={type} className={className}>
      {onCancel ? <FitzyClose onClick={onCancel}>×</FitzyClose> : null}
      {children}
    </FitzyAlert>
  );
}

Alert.propTypes = {
  /**
   * Handler to close the Alert Banner
   */
  onCancel: PropTypes.func,
  /**
   * Type of warning show a different background for each
   */
  type: PropTypes.oneOf(['Error', 'Warning', 'Success', 'Info']),
  /**
   * Optional extra user supplied class name
   */
  className: PropTypes.string
};

Alert.defaultProps = {
  type: 'Error',
  className: ''
};

export default Alert;
