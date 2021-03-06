import styled, { keyframes } from 'styled-components';

import { colors } from '../../theme/theme';
import { resetInput } from '../../styles/mixins';
import { THEME } from '../../shared/propTypes';
import { ModalBody } from './components/Body';

const ModalWrapper = styled.div`
  display: block;
`;

const appear = keyframes`
  from {
    opacity: 0;
    transform: scale(0.75);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const ModalDialog = styled.dialog`
  border: none;
  padding: 0;
  border-radius: 6px;
  background-color: violetred;
  will-change: transform;
  width: 40rem;
  max-width: 90%;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }

  opacity: 0;
  animation: ${appear} 0.25s ease-in forwards;
`;

const ModalContent = styled.div`
  position: relative;

  .model-body {
    background-color: ${({ theme, use }) =>
    use === THEME.light ? colors.light : colors.bgColor};
    color: ${({ theme, use }) =>
    use === THEME.light ? colors.primary : colors.primary};
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 0.5rem;
  right: 0;
  ${resetInput};
  cursor: pointer;
`;

export { CloseButton, ModalDialog, ModalContent, ModalWrapper };
