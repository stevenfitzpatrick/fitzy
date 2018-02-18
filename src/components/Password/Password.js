import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { passwordRules } from '../../utils/formUtils';

class Password extends Component {
  state = {
    strength: {},
    password: '',
    visible: false,
    ok: false
  };

  checkStrength = () => {};

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  static getDerivedStateFromProps(next) {
    const { value, onChange, ...rules } = next; //eslint-disable-line

    let strength = {};

    Object.keys(rules).forEach(key => {
      if (rules[key] && passwordRules[key].pattern.test(value)) {
        strength[key] = true;
      }
    });

    return { strength };

    // this.setState({ strength }, () => {
    //   if (
    //     Object.keys(this.state.strength).length === Object.keys(rules).length
    //   ) {
    //     return { ok: true };
    //   } else {
    //     return { ok: false };
    //   }
    // });
  }

  // componentWillReceiveProps(next) {
  //   if (this.props.value !== next.value) this.checkStrength(next.value);
  // }

  render() {
    const { onChange, value, ...rules } = this.props;

    const processedRules = Object.keys(rules).map(key => ({
      key,
      rule: passwordRules[key],
      isCompleted: this.state.strength[key] || false
    }));

    return (
      <div>
        <label>Password</label>
        <input
          type={this.state.visible ? 'text' : 'password'}
          name="password"
          value={value}
          onChange={onChange}
        />
        <input
          type="checkbox"
          checked={this.state.visible}
          onChange={this.toggleVisibility}
        />
        <ul>
          {processedRules.map(rule => {
            if (rule.isCompleted) {
              return (
                <li key={rule.key}>
                  <strike>{rule.rule.message}</strike>
                </li>
              );
            } else {
              return <li key={rule.key}>{rule.rule.message}</li>;
            }
          })}
        </ul>
      </div>
    );
  }
}

Password.propTypes = {
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
  autoComplete: PropTypes.string
};

Password.defaultProps = {};

export default Password;
