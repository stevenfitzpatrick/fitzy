import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';

import Icon from '../Icon/Icon';
import { CloseButton, ModalContent, ModalDialog } from './Modal.styled';

export class Modal extends Component {
  ref = createRef();
  refContent = createRef();
  el = document.createElement('div');
  modalRoot = document.getElementById('modalRoot');

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
    this.openDialog();
    document.body.classList.add('no-scroll');
    document.addEventListener('click', this.handleOutsideClick, false);
    window.addEventListener('keydown', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
    document.body.classList.remove('no-scroll');
    document.removeEventListener('click', this.handleOutsideClick, false);
    window.removeEventListener('keydown', this.handleKeyUp, false);
  }

  closeDialog = () => this.ref.current.close();

  openDialog = () => this.ref.current.showModal();

  handleClose = e => {
    e.stopPropagation();
    this.closeDialog();
    this.props.onClose();
  };

  handleOutsideClick = e => {
    if (!this.refContent.current.contains(e.target)) {
      this.handleClose(e);
    }
  };

  handleKeyUp = e => {
    const { onClose } = this.props;
    const keys = {
      27() {
        e.preventDefault();
        onClose();
        window.removeEventListener('keydown', this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };

  // componentDidUpdate({ show }) {
  //   if (show !== this.props.show) {
  //     if (this.props.show) {
  //       this.openDialog();
  //     } else {
  //       this.closeDialog();
  //     }
  //   }
  // }

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(
      <ModalDialog innerRef={this.ref}>
        <ModalContent innerRef={this.refContent} className="modal-content">
          <CloseButton type="button" onClick={this.handleClose}>
            <Icon icon="close" size="48" use="Primary" />
          </CloseButton>
          {children}
        </ModalContent>
      </ModalDialog>,
      this.el
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func
};

Modal.defaultProps = {};

export default Modal;
