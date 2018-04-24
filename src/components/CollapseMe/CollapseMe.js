import Proptypes from 'prop-types';
import React, { Component } from 'react';

import { FitzyCollapse } from './CollapseMe.styled';

class CollapseMe extends Component {
  childRef = React.createRef();

  scrollHeight = null;

  componentDidMount = () => {
    const { open } = this.props;
    const childRef = this.childRef.current;
    this.scrollHeight = childRef.scrollHeight;
    if (!open) {
      this.collapseImmediately(childRef);
    }
  };

  componentDidUpdate({ open }) {
    if (open !== this.props.open) {
      this.props.open ? this.expand() : this.collapse();
    }
  }

  collapseImmediately = element => {
    element.style.height = '0px';
  };

  removeHeight = ({ target }) => {
    target.style.height = null;
  };

  collapse = (element = this.childRef.current) => {
    requestAnimationFrame(() => {
      element.style.height = `${this.scrollHeight}px`;
      requestAnimationFrame(() => {
        element.style.height = '0px';
      });
    });
  };

  expand = (element = this.childRef.current) => {
    element.style.height = this.scrollHeight + 'px';
    element.addEventListener(
      'transitionend',
      this.removeHeight,
      { once: true },
      false
    );
  };

  render() {
    const { open } = this.props;
    return (
      <FitzyCollapse innerRef={this.childRef} open={open}>
        {this.props.children({ open })}
      </FitzyCollapse>
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
