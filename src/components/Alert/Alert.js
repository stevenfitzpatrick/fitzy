import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { FitzyAlert, FitzyClose } from './Alert.styled';

function Alert({ onCancel, type, className, children, title }) {
  return (
    <FitzyAlert role="alert" type={type} className={className}>
      <Fragment>
        <h2>{title}</h2>
        <div>{children}</div>
      </Fragment>
      {onCancel ? (
        <FitzyClose onClick={onCancel}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
            <path
              d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            />
          </svg>
          <span />
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
