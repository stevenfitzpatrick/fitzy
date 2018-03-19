import styled, { css } from 'styled-components';

import { colorMixin, resetInput } from '../../styles/mixins';
import { FitzyLoader } from '../Loader/Loader.styled';
import { letterSpacing } from '../../styles/headers';
import { spacing } from '../../styles/spacing';

const FitzyButton = styled.button`
  ${resetInput} text-transform: uppercase;
  font-weight: bold;
  font-size: inherit;
  letter-spacing: ${letterSpacing};

  ${colorMixin};

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
    }
    border: none;
    outline: none;
    opacity: 0.9;
  }

  &:active {
    opacity: 0.75;
  }

  > ${/*sc-s*/ FitzyLoader} {
    margin: 0 0.5rem;
  }
`;

/** @component */
export { FitzyButton };
