import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../Icon/Icon';
import { HiddenRadio, FancyRadio } from './RadioGroup.styled'

const RadioOption = ({ icon, isChecked, value, onChange, name, children }) => (
  <label htmlFor={value}>
    <HiddenRadio
      type="radio"
      checked={isChecked}
      value={value}
      onChange={onChange}
      name={name}
      id={value}
    />
    <FancyRadio>
      <Icon icon={icon} size="24" />
      <span>{children}</span>
    </FancyRadio>
  </label>
);

RadioOption.propTypes = {
   /**
   * Icon Name
   */
  icon: PropTypes.string.isRequired,
  /**
   * onChange Handler sending updated value
   */
  onChange: PropTypes.func,
  /**
   * Name of the field
   */
  name: PropTypes.string,
  /**
   * Current Value of the field
   */
  value: PropTypes.string.isRequired,
  /**
   * Current Value of the field
   */
  isChecked: PropTypes.bool,
  /**
   * Current Value of the field
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

RadioOption.defaultProps = {
  isChecked: false
};

export default RadioOption;
