import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import CloseIcon from '../../styles/icons/CloseIcon';
import { SRClose } from '../../styles/CloseButton.styled';
import { FitzyAlert, FitzyAlertIcon, FitzyClose } from './Alert.styled';

function Alert({ onCancel, level, className, children, title }) {
  return (
    <FitzyAlert role="alert" level={level} className={className}>
      <FitzyAlertIcon />
      <Fragment>
        <h2>{title}</h2>
        <div>{children}</div>
      </Fragment>
      {onCancel ? (
        <FitzyClose onClick={onCancel}>
          <CloseIcon height="12" width="12" />
          <SRClose>Close Alert</SRClose>
        </FitzyClose>
      ) : null}
    </FitzyAlert>
  );
}

Alert.propTypes = {
  /**
   * Title for the error message
   */
  title: PropTypes.string.isRequired,
  /**
   * Handler to close the Alert Banner
   */
  onCancel: PropTypes.func,
  /**
   * Type of warning show a different background for each
   */
  level: PropTypes.oneOf(['Error', 'Warning', 'Success', 'Info']),
  /**
   * Optional extra user supplied class name
   */
  className: PropTypes.string
};

Alert.defaultProps = {
  level: 'Error',
  className: ''
};

export default Alert;
