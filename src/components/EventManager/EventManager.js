import PropTypes from 'prop-types';
import { Component } from 'react';

const noop = () => {};

export class EventManager extends Component {
  handleBlur = callback => e => {
    callback(e);
    this.props.onBlur(e);
  };

  handleFocus = callback => e => {
    callback(e);
    this.props.onFocus(e);
  };

  handleMouseEnter = callback => e => {
    callback(e);
    this.props.onMouseEnter(e);
  };

  handleMouseOver = callback => e => {
    callback(e);
    this.props.onMouseOver(e);
  };

  handleMouseLeave = callback => e => {
    callback(e);
    this.props.onMouseLeave(e);
  };

  getProps = ({
    onBlur = noop,
    onFocus = noop,
    onMouseEnter = noop,
    onMouseLeave = noop,
    onMouseOver = noop,
    ...props
  } = {}) => ({
    onBlur: this.handleBlur(onBlur),
    onFocus: this.handleFocus(onFocus),
    onMouseEnter: this.handleMouseEnter(onMouseEnter),
    onMouseLeave: this.handleMouseLeave(onMouseLeave),
    onMouseOver: this.handleMouseOver(onMouseOver),
    ...props
  });

  render() {
    return this.props.children({ getProps: this.getProps });
  }
}

EventManager.propTypes = {
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

EventManager.defaultProps = {
  onBlur: noop,
  onFocus: noop,
  onMouseOver: noop,
  onMouseEnter: noop,
  onMouseLeave: noop
};

export default EventManager;
