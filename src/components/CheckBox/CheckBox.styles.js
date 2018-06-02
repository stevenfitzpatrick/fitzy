import styled from 'styled-components';

import { colors } from '../../theme/theme';
import { hidden } from '../../styles/mixins';
export const HiddenCheckbox = styled.input`
  ${hidden};

  &:disabled ~ * {
    cursor: not-allowed;
    color: ${colors.primaryDisabledColor};
  }
`;

export const FitzyCheckBoxText = styled.span`
  padding-left: 0.5rem;
`;

export const FitzyCheckbox = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.Primary.bg};
  border: 2px solid currentColor;
  border-color: currentColor;
  position: relative;
  border-radius: 3px;
  background-color: ${colors.light};
  height: 1.25em;
  width: 1.25em;
  transition: all 0.25s ease-in;

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    height: inherit;
    opacity: ${p => (p.checked ? 1 : 0)};
    transition: opacity 0.25s ease-in;
  }
`;

export const FitzyCheckboxLabel = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;

  &:hover ${FitzyCheckbox} {
    background-color: ${colors.secondaryHover};
  }
`;
