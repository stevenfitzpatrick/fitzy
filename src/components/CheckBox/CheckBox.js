import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Icon from '../Icon/Icon';
import {
  FitzyCheckbox,
  FitzyCheckboxLabel,
  FitzyCheckBoxText,
  HiddenCheckbox
} from './CheckBox.styles';

class CheckBox extends Component {
  render() {
    const { onChange, checked, children, disabled } = this.props;
    return (
      <FitzyCheckboxLabel>
        <HiddenCheckbox
          type="checkbox"
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <FitzyCheckbox checked={checked}>
          <Icon icon="checkmark" />
        </FitzyCheckbox>
        <FitzyCheckBoxText>{children}</FitzyCheckBoxText>
      </FitzyCheckboxLabel>
    );
  }
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  isDefaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

CheckBox.defaultProps = {
  onChange: () => {},
  disabled: false
};

export default CheckBox;
