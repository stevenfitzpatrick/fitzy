import styled, { keyframes } from 'styled-components';
import { resetInput } from '../../styles/mixins';

const ModalWrapper = styled.div`
  display: block;
`;

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ModalDialog = styled.dialog`
  border: none;
  padding: 0;
  border-radius: 6px;
  background-color: violetred;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }

  opacity: 0;
  animation: ${appear} 0.25s ease-in forwards;
`;

const ModalContent = styled.div`
  padding: 2rem;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  ${resetInput};
  cursor: pointer;
`;

export { CloseButton, ModalDialog, ModalContent, ModalWrapper };
