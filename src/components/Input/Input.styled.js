import styled from 'styled-components';

import { colors } from '../../theme/theme';
import { errorMixin } from '../../styles/mixins';
import { font } from '../../styles/font';
import { spacing } from '../../styles/spacing';

const FormField = styled.label`
  position: relative;
  display: block;
  margin-bottom: ${spacing.xl};

  ${errorMixin};
`;

const FormError = styled.span`
  display: block;
  color: ${colors.errorActive};
  font-size: ${font.m};
  margin-top: ${spacing.s};
`;

const FitzyLabel = styled.label`
  position: absolute;
  display: inline-block;
  max-width: 100%;
  font-size: ${font.m};
  color: #fff;
  top: 1rem;
  transition: all 0.3s ease;
  pointer-events: none;
  transform-origin: 0 0;
`;

const FitzyInput = styled.input`
  position: relative;
  display: block;
  padding: ${spacing.m} 0;
  width: 100%;

  line-height: 1rem;
  font-size: 1rem;
  font-weight: normal;
  font-family: inherit;

  background-color: transparent;
  border: none;
  border: 1px solid transparent;
  border-bottom: 1px solid ${p => p.theme.Input.border};
  color: #fff;
  transition: border 0.3s ease-in-out;

  ~ label {
    color: ${p => p.theme.Input.label};
    transform: ${({ value }) =>
    value ? `translateY(-${spacing.xxxxl})` : 'translateY(0)'};
    opacity: ${({ value }) => (value ? '1' : '0')};
    pointer-events: none;
  }

  &::-webkit-input-placeholder {
    color: ${p => p.theme.Input.placeholder};
  }

  &:focus {
    border-bottom: 1px solid ${p => p.theme.Input.borderActive};
    outline: none;

    & ~ label {
      color: ${p => p.theme.Input.labelActive};
    }
  }
`;

/** @component */
export { FitzyInput, FormField, FitzyLabel, FormError };
