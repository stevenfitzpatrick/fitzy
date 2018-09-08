import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { RadioContainer } from './RadioGroup.styled';

class RadioGroup extends PureComponent {
  onChange = e => this.props.onChange && this.props.onChange(e.target.value);

  render() {
    return <RadioContainer>{React.Children.map(this.props.children, child => {
       return React.cloneElement(child, {
         isChecked: this.props.value === child.props.value,
         name: this.props.name,
         onChange: this.onChange
       });
     })}</RadioContainer>;

  }
}

RadioGroup.propTypes = {
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

RadioGroup.defaultProps = {
  value: ''
};

export default RadioGroup;
