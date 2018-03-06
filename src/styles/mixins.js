import { css } from 'styled-components';

/**
 * Helper for bg color, text and text shadow
 * @param {object} Styled Component Props
 */
export const colorMixin = ({ theme, level }) =>
  css`
    background-color: ${theme[level].bg};
    color: ${theme[level].text};
    text-shadow: ${theme[level].textShadow};
  `;
