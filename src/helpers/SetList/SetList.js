import invariant from 'invariant';
import { array, func } from 'prop-types';
import { Component } from 'react';

class SetList extends Component {
  state = {
    list: new Set(this.props.list)
  };

  add = item => {
    this.state.list.add(item);
  };

  clear = () => {
    this.state.list.clear();
  };

  remove = item => {
    this.state.list.delete(item);
  };

  render() {
    const { children } = this.props;
    const isFunction = typeof children === 'function';

    invariant(isFunction, 'You need to pass children prop as a function');

    const helpers = {
      list: this.state.list,
      add: this.add,
      clear: this.clear,
      remove: this.remove
    };

    return children(helpers);
  }
}

SetList.propTypes = {
  children: func.isRequired,
  list: array
};

SetList.defaultProps = {
  list: []
};

export default SetList;
