import Proptypes from 'prop-types';
import React, { Component } from 'react';

class CollapseMe extends Component {
  childRef = React.createRef();

  componentDidMount = () => {
    const { open } = this.props;
    if (!open) {
      this.collapseImmediately(this.childRef.current);
    }
  };

  componentDidUpdate({ open }) {
    if (open !== this.props.open) {
      if (this.props.open) this.expand();
      else this.collapse();
    }
  }

  collapseImmediately = element => {
    element.style.height = '0px';
  };

  collapse = (element = this.childRef.current) => {
    const height = element.scrollHeight;
    requestAnimationFrame(() => {
      element.style.height = height + 'px';
      requestAnimationFrame(() => {
        element.style.height = '0px';
      });
    });
  };

  expand = (element = this.childRef.current) => {
    const height = element.scrollHeight;

    // have the element transition to the height of its inner content
    element.style.height = height + 'px';

    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener(
      'transitionend',
      () => {
        // remove "height" from the element's inline styles, so it can return to its initial value
        element.style.height = null;
      },
      { once: true },
      false
    );
  };

  render() {
    return (
      <div
        style={{
          overflow: 'hidden',
          transition: 'height 0.3s ease-out'
        }}
        ref={this.childRef}
      >
        {this.props.children()}
      </div>
    );
  }
}

CollapseMe.defaultProps = {
  open: Proptypes.bool
};

CollapseMe.defaultProps = {
  open: false
};

export default CollapseMe;
