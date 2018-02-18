import PropTypes from 'prop-types';
import { Component } from 'react';

import {
  isDelete,
  isEnter,
  keyMatches,
  keys
} from '../../utils/accessibilityUtils';
import { isEmpty } from '../../utils/formUtils';

class TagInput extends Component {
  state = {
    inputValue: ''
  };

  /**
   * Clear Input text value
   */
  clearInput() {
    this.setState({ inputValue: '' });
  }

  // Input Handlers

  input_handleChange = e => {
    const inputValue = e.target.value;
    this.setState(() => ({
      inputValue
    }));
  };

  input_handleKeyDown = e => {
    const key = e.which;
    const value = e.target.value;
    if (keyMatches(key, [keys.Enter, keys.Escape])) {
      e.preventDefault();
      this.clearInput();
      if (isEnter(key) && !isEmpty(value)) {
        this.props.onAdd(value.trim());
      }
    }
  };

  // Tag Handlers

  tag_handleClick = e => {
    this.props.onRemove(e.target.dataset.id);
  };

  tag_handleKeyDown = e => {
    if (isDelete(e.which)) {
      e.preventDefault();
      this.props.onRemove(e.target.dataset.id);
    }
  };

  getTagProps = ({ ...props }) => {
    const { tag_handleClick, tag_handleKeyDown } = this;
    return {
      onRemove: tag_handleClick,
      onKeyDown: tag_handleKeyDown,
      ...props
    };
  };

  getInputProps = ({ ...props } = {}) => {
    const { inputValue } = this.state;
    const { input_handleChange, input_handleKeyDown } = this;
    return {
      onChange: input_handleChange,
      onKeyDown: input_handleKeyDown,
      value: inputValue,
      ...props
    };
  };

  getStateAndHelpers() {
    const { getInputProps, getTagProps } = this;
    const { items } = this.props;
    const { inputValue } = this.state;

    return {
      // State
      inputValue,

      // Props
      items,

      // Prop Getters
      getInputProps,
      getTagProps

      // actions
    };
  }
  render() {
    return this.props.render(this.getStateAndHelpers());
  }
}

TagInput.propTypes = {
  render: PropTypes.func.isRequired,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func
};

TagInput.propTypes = {
  onRemove: () => {},
  onAdd: () => {}
};

export default TagInput;
