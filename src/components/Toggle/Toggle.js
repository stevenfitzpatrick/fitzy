import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import { toggleBtn, toggleBtnOn, toggleInput } from './styles';

function ToggleOn({ on, children }) {
  return on ? children : null;
}

function ToggleOff({ on, children }) {
  return on ? null : children;
}

function ToggleButton({ on, handleToggle, ...props }) {
  const className = classnames(toggleBtn, 'toggle-btn', on ? toggleBtnOn : '');
  return (
    <Fragment>
      <input className={toggleInput} type="checkbox" />
      <button
        className={className}
        aria-expanded={on}
        onClick={handleToggle}
        {...props}
      />
    </Fragment>
  );
}

class Toggle extends Component {
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;

  initialState = {
    on: this.props.defaultOn
  };

  state = this.initialState;

  isControlled = () => this.props.on !== undefined;

  handleToggle = () => {
    const { onToggle, on } = this.props;
    if (this.isControlled()) {
      onToggle(!on);
    } else {
      this.setState(
        ({ on }) => ({
          on: !on
        }),
        () => onToggle(this.state.on)
      );
    }
  };

  render() {
    const { on } = this.state;
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.isControlled() ? this.props.on : on,
        handleToggle: this.handleToggle
      })
    );
    return <div className={this.props.className}>{children}</div>;
  }
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  onReset: PropTypes.func,
  defaultOn: PropTypes.bool,
  on: PropTypes.bool
};

Toggle.defaultProps = {
  onToggle() {},
  onReset() {},
  defaultOn: false
};

export default Toggle;
