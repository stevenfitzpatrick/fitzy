export const setThemeColors = (colors, theme, overrides = {}) => ({
  border: colors[`${theme}Border`],
  bg: colors[`${theme}`],
  hover: colors[`${theme}Hover`],
  active: colors[`${theme}Active`],
  text: colors.light,
  textShadow: colors.textShadowDark.bg,
  ...overrides
});
