import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { isBoolean } from '../../utils/formUtils';

class Input extends PureComponent {
  getEventValue = (type, e) =>
    isBoolean(type) ? e.target.checked : e.target.value;

  handleChange = e =>
    this.props.onChange &&
    this.props.onChange(e, this.getEventValue(this.props.type, e));

  handleBlur = e => {
    this.props.onBlur &&
      this.props.onBlur(e, this.getEventValue(this.props.type, e));
  };

  renderHint() {
    const { hint } = this.props;

    if (!hint) {
      return null;
    }

    return <p>{hint}</p>;
  }

  renderLabel(inputId) {
    const { label } = this.props;

    if (!label) {
      return null;
    }

    return <label htmlFor={inputId}>{label}</label>;
  }

  renderInput(inputId) {
    const {
      type,
      name,
      value,
      placeholder,
      required,
      disabled,
      autoFocus
    } = this.props;

    const Type = type === 'textarea' ? 'textarea' : 'input';
    return (
      <Type
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        id={inputId}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }

  render() {
    const { id, name } = this.props;
    const inputId = id || name;

    return (
      <div>
        {this.renderLabel(inputId)}
        {this.renderInput(inputId)}
        {this.renderHint()}
      </div>
    );
  }
}

Input.propTypes = {
  /**
   * onChange Handler sending updated value
   */
  onChange: PropTypes.func.isRequired,
  /**
   * onBlur Handler sending updated value
   */
  onBlur: PropTypes.func,
  /**
   * Current Value of the input
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  /**
   * Set input type
   */
  type: PropTypes.oneOf([
    'checkbox',
    'text',
    'url',
    'email',
    'color',
    'date',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'textarea'
  ]),
  /**
   * Set Label for input field
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Set name for input field
   */
  name: PropTypes.string,
  /**
   * Set placeholder for input field
   */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Set hint for input field
   */
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Set id for input field
   */
  id: PropTypes.string,
  /**
   * Mark the field as required
   */
  required: PropTypes.bool,
  /**
   * Mark the field as disabled
   */
  disabled: PropTypes.bool,
  /**
   * Add SpellCheck functionality to input
   */
  spellCheck: PropTypes.bool,
  /**
   * Add SpellCheck functionality to input
   */
  autoFocus: PropTypes.bool
};

Input.defaultProps = {
  type: 'text',
  required: false,
  placeholder: '',
  hint: '',
  value: '',
  disabled: false,
  spellCheck: false,
  autoFocus: false
};

export default Input;
