import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Loader from '../Loader/Loader';
import { FitzyButton } from './Button.styled';

class Button extends Component {
  handleClick = e => this.props.onClick && this.props.onClick(e);

  render() {
    const {
      children,
      type,
      disabled,
      use,
      fullWidth,
      className,
      loading,
      ...props
    } = this.props;

    return (
      <FitzyButton
        type={type}
        disabled={disabled}
        use={use}
        onClick={this.handleClick}
        fullWidth={fullWidth}
        loading={loading}
        className={className}
        {...props}
      >
        {children}
        {loading ? <Loader size={20} color="Light" /> : null}
      </FitzyButton>
    );
  }
}

Button.propTypes = {
  /**
   * onClick Handler handling button click
   */
  onClick: PropTypes.func,
  /**
   * Value to display in button
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ]),
  /**
   * Set button type
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * Set button style
   */
  btnStyle: PropTypes.oneOf(['link', 'primary', 'outline']),
  /**
   * Set button theme
   */
  use: PropTypes.oneOf(['Primary', 'Secondary', 'Warning', 'Error', 'Info', 'Light']),
  /**
   * Mark the button as disabled
   */
  disabled: PropTypes.bool,
  /**
   * Show Loading state of button
   */
  loading: PropTypes.bool,
  /**
   * Display the button as full width i.e. 100%
   */
  fullWidth: PropTypes.bool,
  /**
   * Optional class name to add to button
   */
  className: PropTypes.string,
  /**
   * Optional class name to add to button
   */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ])
};

Button.defaultProps = {
  type: 'submit',
  btnStyle: 'primary',
  use: 'Primary',
  disabled: false,
  fullWidth: false,
  loading: false,
  icon: null,
  className: ''
};

export default Button;
