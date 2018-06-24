import React, { Component } from 'react';

class Accordion extends Component {
  static defaultProps = {
    stateReducer: (state, changes) => changes,
    onStateChange: () => {}
  };

  state = {
    openIndexes: [0]
  };

  getState(state = this.state) {
    return {
      openIndexes:
        this.props.openIndexes === undefined
          ? state.openIndexes
          : this.props.openIndexes
    };
  }

  internalSetState(changes, callback = () => {}) {
    let allChanges;
    this.setState(
      state => {
        const actualState = this.getState(state);
        const changesObject =
          typeof changes === 'function' ? changes(actualState) : changes;
        allChanges = this.props.stateReducer(actualState, changesObject);
        return allChanges;
      },
      () => {
        this.props.onStateChange(allChanges);
        callback();
      }
    );
  }

  handleItemClick = index => {
    this.internalSetState(state => {
      const closing = state.openIndexes.includes(index);
      return {
        type: closing ? 'closing' : 'opening',
        openIndexes: closing
          ? state.openIndexes.filter(i => i !== index)
          : [...state.openIndexes, index]
      };
    });
  };

  render() {
    const { openIndexes } = this.getState();
    const { children, ...props } = this.props;
    return children({
      openIndexes,
      handleItemClick: this.handleItemClick
    });
  }
}

export default Accordion;
