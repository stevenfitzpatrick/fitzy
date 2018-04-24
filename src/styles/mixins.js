import { css } from 'styled-components';

import { colors } from '../theme/theme';

/**
 * Helper for bg color, text and text shadow for primary style
 * @param {object} Styled Component Props
 */
export const colorMixin = ({ theme, use, disabled }) => {
  const color = disabled ? 'Disabled' : use;

  return css`
    background-color: ${theme[color].bg};
    color: ${theme[color].text};
    text-shadow: ${theme[color].textShadow};
  `;
};

/**
 * Helper for bg color, text and text shadow for secondary style
 * @param {object} Styled Component Props
 */
export const secondaryMixin = ({ theme, use, disabled }) => {
  const color = disabled ? 'Disabled' : use;

  return css`
    border: 1px solid
      ${color !== 'Secondary' ? theme[color].bg : theme[color].border};
  `;
};

/**
 * Reset default styles on form inputs
 */
export const resetInput = css`
  background: none;
  outline: none;
  border: none;
  appearance: none;
`;

export const errorMixin = ({ warning }) => {
  if (!warning) return;

  return css`
    &:focus-within {
      > * {
        color: ${colors.formWarning} !important;
        border-bottom-color: ${colors.formWarning} !important;
      }
    }
    > * {
      color: ${colors.formWarningActive} !important;
      border-bottom-color: ${colors.formWarningActive} !important;
    }
  `;
};

export const arrowSideMixin = ({ placement }) => {
  if (placement === 'top') {
    return css`
      top: 100%;
      left: 50%;
    `;
  } else if (placement === 'bottom') {
    return css`
      top: 0%;
      left: 50%;
    `;
  } else if (placement === 'right') {
    return css`
      top: 50%;
      left: 0%;
    `;
  } else if (placement === 'left') {
    return css`
      top: 50%;
      left: 100%;
    `;
  }
};

export const hidden = css`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
