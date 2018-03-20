import styled from 'styled-components';

import { colors } from '../../theme/theme';
import { errorMixin } from '../../styles/mixins';
import { font } from '../../styles/font';
import { spacing } from '../../styles/spacing';

const FormField = styled.label`
  position: relative;
  display: block;
  margin-bottom: ${spacing.xxxxxl};

  ${errorMixin};
`;

const FormError = styled.span`
  position: absolute;
  display: block;
  color: ${colors.errorActive};
  font-size: ${font.m};
`;

const FitzyLabel = styled.label`
  position: absolute;
  display: inline-block;
  max-width: 100%;
  font-size: ${font.m};
  color: ${p => p.theme.Input.label};
  top: 1rem;
  transition: all 0.3s ease;
  pointer-events: none;
  opacity: 0;
  transform: translateY(0);
`;

const FitzyInput = styled.input`
  position: relative;
  display: block;
  padding: ${spacing.s} 0;
  width: 100%;

  line-height: ${font.xl};
  font-size: 1rem;
  font-weight: normal;
  font-family: inherit;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${p => p.theme.Input.border};
  color: #fff;
  transition: border 0.3s ease-in-out;

  ~ label {
    transform: ${p =>
    p.value ? `translateY(-${spacing.xxxxl})` : 'translateY(0)'};
    opacity: ${p => (p.value ? 1 : 0)};
  }

  &::-webkit-input-placeholder {
    color: ${p => p.theme.Input.placeholder};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${colors.bgColor} inset;
    -webkit-text-fill-color: ${colors.light} !important;

    ~ label {
      transform: translateY(-${spacing.xxxxl});
      opacity: 1;
    }
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
