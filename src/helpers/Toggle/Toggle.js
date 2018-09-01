import invariant from 'invariant';
import { bool } from 'prop-types';
import { Component } from 'react';

class Toggle extends Component {
  state = { open: this.props.isOpen };

  handleToggle = () => this.setState(({ open }) => ({ open: !open }));

  propGetter = () => ({
    isOpen: this.state.open,
    onToggle: this.handleToggle
  });

  render() {
    const { children } = this.props;
    const isFunction = typeof children === 'function';

    invariant(isFunction, 'You need to pass children prop as a function');

    return children(this.propGetter());
  }
}

Toggle.propTypes = {
  isOpen: bool
};

Toggle.defaultProps = {
  isOpen: false
};

export default Toggle;
