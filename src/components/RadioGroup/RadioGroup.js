import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends PureComponent {
  static propTypes = {
    /**
     * onChange Handler sending updated value
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Name of the field
     */
    name: PropTypes.string.isRequired,
    /**
     * Current Value of the field
     */
    value: PropTypes.string,
    /**
     * Radio Options List
     */
    children: PropTypes.node
  };

  static defaultProps = {
    value: ''
  };

  /**
   * On Change Event Handler
   */
  onChange = e => this.props.onChange && this.props.onChange(e.target.value);

  render() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isChecked: this.props.value === child.props.value,
        name: this.props.name,
        onChange: this.onChange
      });
    });
  }
}

export default RadioGroup;
