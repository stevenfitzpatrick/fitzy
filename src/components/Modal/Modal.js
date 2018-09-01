import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import { func, oneOf } from 'prop-types';

import Icon from '../Icon/Icon';
import { THEME, THEMES } from '../../shared/propTypes';
import { Body, Footer, Header } from './components/index';
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

  closeDialog = () => {
    if (typeof this.ref.current.close === 'function') this.ref.current.close();
  };

  openDialog = () => {
    if (typeof this.ref.current.showModal === 'function')
      this.ref.current.showModal();
  };

  handleClose = e => {
    e.stopPropagation();
    this.closeDialog();
    this.props.onClose();
  };

  handleOutsideClick = e => {
    const { tagName } = e.target;
    if (tagName === 'DIALOG') {
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

  render() {
    const { children, use } = this.props;

    return ReactDOM.createPortal(
      <ModalDialog innerRef={this.ref}>
        <ModalContent
          innerRef={this.refContent}
          className="modal-content"
          use={use}
        >
          <CloseButton
            type="button"
            onClick={this.handleClose}
            data-testid="modal-close"
          >
            <Icon icon="close" size="48" use="Light" />
          </CloseButton>
          {children}
        </ModalContent>
      </ModalDialog>,
      this.el
    );
  }
}

Modal.propTypes = {
  onClose: func,
  use: oneOf(THEMES)
};

Modal.defaultProps = {
  onClose: () => {},
  use: THEME.light
};

Modal.Body = Body;
Modal.Footer = Footer;
Modal.Header = Header;

export default Modal;
