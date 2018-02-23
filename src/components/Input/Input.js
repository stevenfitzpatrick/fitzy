import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';

import { isBoolean } from '../../utils/formUtils';
import { inputStyles } from './styles';

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

  renderWarning() {
    const { warning } = this.props;

    if (!warning) {
      return null;
    }

    return warning;
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
      autoFocus,
      spellCheck,
      autoComplete
    } = this.props;

    const classNames = classnames(inputStyles);

    const Type = type === 'textarea' ? 'textarea' : 'input';
    return (
      <Type
        name={name}
        className={classNames}
        value={value}
        placeholder={placeholder}
        type={type}
        id={inputId}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        spellCheck={spellCheck}
        autoComplete={autoComplete}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }

  render() {
    const { id, name, className } = this.props;
    const inputId = id || name;

    return (
      <div className={className}>
        {this.renderLabel(inputId)}
        {this.renderInput(inputId)}
        {this.renderHint()}
        {this.renderWarning()}
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
   * Add Auto Focus functionality to input
   */
  autoFocus: PropTypes.bool,
  /**
   * Add Auto Complete aka autofill functionality to input
   */
  autoComplete: PropTypes.string,
  /**
   * Add Error Message below search field
   */
  warning: PropTypes.node,
  /**
   * Classname for css class for input container
   */
  className: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  required: false,
  placeholder: null,
  hint: '',
  value: '',
  disabled: false,
  spellCheck: null,
  autoFocus: null,
  autoComplete: null,
  warning: null,
  className: ''
};

export default Input;
