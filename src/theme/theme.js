import { setThemeColors } from './utils';

export const colors = {
  // Background colors
  bgColor: '#172025',
  // Shadow Colors
  textShadowDark: '0 1px 2px rgba(0, 0, 0, 0.2)',
  boxShadowDark: 'hsla(0, 0%, 0%, 0.2)',
  // Text Colors
  light: '#ffffff',
  formWarning: '#f25c54',
  formWarningActive: '#D05353',
  placeholder: '#b0c1d4',
  // Primary Theme Colors
  primary: 'hsl(152, 62%, 53%)',
  primaryHover: 'hsl(152, 62%, 63%)',
  primaryActive: 'hsl(152, 62%, 43%)',
  primaryBorder: 'hsl(152, 62%, 38%)',
  // Secondary Theme Colors
  secondary: 'transparent',
  secondaryText: 'hsl(152, 62%, 53%)',
  secondaryHover: 'hsl(152, 62%, 95%)',
  secondaryActive: 'hsl(152, 62%, 90%)',
  secondaryBorder: 'hsl(152, 62%, 63%)',
  // Warning Theme Colors
  warning: 'hsl(36, 100%, 53%)',
  warningHover: 'hsl(36, 100%, 63%)',
  warningActive: 'hsl(36, 100%, 43%)',
  warningBorder: 'hsl(36, 100%, 38%)',
  // Error Theme Colors
  error: 'hsl(0, 57%, 63%)',
  errorHover: 'hsl(0, 57%, 59%)',
  errorActive: 'hsl(0, 57%, 53%)',
  errorBorder: 'hsl(0, 57%, 48%)',
  // Info Theme Colors
  info: 'hsl(201, 98%, 43%)',
  infoHover: 'hsl(201, 98%, 53%)',
  infoActive: 'hsl(201, 98%, 33%)',
  infoBorder: 'hsl(201, 98%, 28%)',
  // Success Theme Colors
  success: 'hsl(123, 38%, 53%)',
  successHover: 'hsl(123, 38%, 63%)',
  successActive: 'hsl(123, 38%, 43%)',
  successBorder: 'hsl(123, 38%, 38%)',
  // Texas Theme Colors
  texas: 'hsl(27, 60%, 50%)',
  texasHover: 'hsl(27, 69%, 50%)',
  texasActive: 'hsl(27, 100%, 37%)',
  texasBorder: 'hsl(27, 60%, 50%)',
  // Disabled Colors
  primaryDisabled: '#eaf0f6',
  primaryDisabledColor: '#b0c1d4'
};

const theme = {
  boxShadowColor: colors.boxShadowDark,
  boxShadowSize: '0 4px 6px',
  headerLetterSpacing: '0.05rem',
  // Colors
  Primary: {
    ...setThemeColors(colors, 'primary')
  },
  Secondary: {
    ...setThemeColors(colors, 'secondary', {
      text: colors.secondaryText
    })
  },
  Warning: {
    ...setThemeColors(colors, 'warning')
  },
  Error: {
    ...setThemeColors(colors, 'error')
  },
  Info: {
    ...setThemeColors(colors, 'info')
  },
  Success: {
    ...setThemeColors(colors, 'success')
  },
  Texas: {
    ...setThemeColors(colors, 'texas')
  },
  Input: {
    text: colors.light,
    placeholder: colors.placeholder,
    placeholderHover: colors.placeholder,
    label: colors.primary,
    labelActive: colors.primaryHover,
    border: colors.primary,
    borderActive: colors.primaryHover
  },
  Disabled: {
    border: colors.primaryDisabled,
    bg: colors.primaryDisabled,
    text: colors.primaryDisabledColor,
    textShadow: 'none'
  },
  Light: {
    border: colors.light,
    bg: colors.light,
    text: colors.light,
    textShadow: colors.textShadowDark
  }
};

export default theme;
