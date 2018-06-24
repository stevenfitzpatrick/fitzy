import { createContext } from 'react';

const ModalContext = createContext({
  component: null,
  props: {},
  showModal: () => {},
  hideModal: () => {}
});

export const ModalConsumer = ModalContext.Consumer;

export default ModalContext;
