import { css } from 'styled-components';

/**
 * Helper for bg color, text and text shadow
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
 * Reset default styles on form inputs
 */
export const resetInput = css`
  background: none;
  outline: none;
  border: none;
  appearance: none;
`;
