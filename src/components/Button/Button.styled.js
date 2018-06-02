import styled from 'styled-components';

import { colorMixin, resetInput, secondaryMixin } from '../../styles/mixins';
import { FitzyLoader } from '../Loader/Loader.styled';
import { letterSpacing } from '../../styles/headers';
import { spacing } from '../../styles/spacing';

const FitzyButton = styled.button.attrs({
  'aria-busy': p => p.loading
})`
  ${resetInput};
  font-weight: bold;
  font-size: inherit;
  letter-spacing: ${letterSpacing};
  line-height: 1rem;

  ${colorMixin};
  ${secondaryMixin};

  svg {
    margin-right: 0.5rem;
  }

  border-radius: 4px;
  transition: all 0.25s ease;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${spacing.m} ${spacing.xl};
  user-select: none;
  cursor: pointer;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    ${colorMixin};
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    &:not(:disabled) {
      transform: translateY(-1px);
      background-color: ${({ theme, use }) => theme[use].hover};
    }
  }

  &:active:not(:disabled) {
    background-color: ${({ theme, use }) => theme[use].active};
  }

  > ${/*sc-s*/ FitzyLoader} {
    margin: 0 0.5rem;
  }
`;

/** @component */
export { FitzyButton };
