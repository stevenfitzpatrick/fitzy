import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { FitzyButton } from './Button.styled';

class Button extends Component {
  handleClick = e => this.props.onClick && this.props.onClick(e);

  render() {
    const {
      children,
      type,
      disabled,
      fullWidth,
      className,
      ...props
    } = this.props;

    return (
      <FitzyButton
        type={type}
        disabled={disabled}
        onClick={this.handleClick}
        fullWidth={fullWidth}
        className={className}
        {...props}
      >
        {children}
      </FitzyButton>
    );
  }
}

Button.propTypes = {
  /**
   * onClick Handler handling button click
   */
  onClick: PropTypes.func.isRequired,
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
   * Mark the button as disabled
   */
  disabled: PropTypes.bool,
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
  disabled: false,
  fullWidth: false,
  icon: null,
  className: ''
};

export default Button;
