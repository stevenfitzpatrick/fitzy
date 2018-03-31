import styled from 'styled-components';

import { colors } from '../../theme/theme';
import { errorMixin } from '../../styles/mixins';
import { font } from '../../styles/font';
import { spacing } from '../../styles/spacing';

const FormField = styled.label`
  position: relative;
  display: block;
  margin-bottom: ${spacing.xxxxl};
  padding-top: ${spacing.m};

  ${errorMixin};
`;

const InputBar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &::before,
  &::after {
    content: '';
    height: 3px;
    width: 0;
    bottom: 0;
    position: absolute;
    background-color: ${p => p.theme.Input.borderActive};
    transition: 0.2s ease all;
  }

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
  }
`;

/**
 * Input field alert messages
 */
const FormError = styled.span.attrs({
  role: 'alert',
  'aria-atomic': 'true'
})`
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
  line-height: 1;
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
    p.value ? `translateY(-${spacing.l})` : 'translateY(0)'};
    opacity: ${p => (p.value ? 1 : 0)};
  }

  &::placeholder {
    color: ${p => p.theme.Input.placeholder};
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 30px ${colors.bgColor} inset;
    -webkit-text-fill-color: ${colors.light} !important;
    caret-color: ${p => p.theme.Input.placeholder};

    &::placeholder {
      color: ${p => p.theme.Input.placeholder};
    }

    ~ label {
      transform: translateY(-${spacing.l});
      opacity: 1;
    }
  }

  &:focus {
    border-bottom: 1px solid ${p => p.theme.Input.borderActive};
    outline: none;

    & ~ label {
      color: ${p => p.theme.Input.labelActive};
      transform: translateY(-${spacing.l});
      opacity: 1;
    }

    & ~ span {
      &::before,
      &::after {
        width: 50%;
      }
    }
  }
`;

/** @component */
export { FitzyInput, FormField, FitzyLabel, FormError, InputBar };
