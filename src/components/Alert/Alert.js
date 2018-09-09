import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Icon from '../Icon/Icon';
import { SRClose } from '../../styles/CloseButton.styled';
import { FitzyAlert, FitzyAlertIcon, FitzyClose } from './Alert.styled';

function Alert({ onCancel, use, className, children, title }) {
  const iconName = use === 'Success' ? 'check' : 'exlamation';

  return (
    <FitzyAlert use={use} className={className}>
      <FitzyAlertIcon icon={iconName} />
      <Fragment>
        <h2>{title}</h2>
        <div>{children}</div>
      </Fragment>
      {onCancel ? (
        <FitzyClose onClick={onCancel}>
          <Icon icon="close" size="24" />
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
  use: PropTypes.oneOf(['Error', 'Warning', 'Success', 'Info']),
  /**
   * Optional extra user supplied class name
   */
  className: PropTypes.string
};

Alert.defaultProps = {
  use: 'Error',
  className: ''
};

export default Alert;
