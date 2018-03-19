const colors = {
  // Shadow Colors
  textShadowDark: '0 1px 2px rgba(0, 0, 0, 0.2)',
  boxShadowDark: 'hsla(0, 0%, 0%, 0.2)',
  // Text Colors
  light: '#ffffff',
  // Theme Colors
  primary: 'hsl(152, 62%, 53%)',
  primaryDarker: '#199676',
  // Disabled Colors
  primaryDisabled: 'hsl(152, 62%, 80%)',
  primaryDisabledColor: '#ffffff'
};

const theme = {
  boxShadowColor: colors.boxShadowDark,
  boxShadowSize: '0 4px 6px',
  headerLetterSpacing: '0.05rem',
  // Colors
  Primary: {
    border: colors.primaryDarker,
    bg: colors.primary,
    text: colors.light,
    textShadow: colors.textShadowDark
  },
  Disabled: {
    border: colors.primaryDarker,
    bg: colors.primaryDisabled,
    text: colors.primaryDisabledColor,
    textShadow: 'none'
  },
  Light: {
    border: colors.light,
    bg: colors.light,
    text: colors.light,
    textShadow: colors.textShadowDark
  },
  Warning: {
    border: '#F57C00',
    bg: '#FFA726',
    text: colors.light,
    textShadow: colors.textShadowDark
  },
  Error: {
    border: '#d05353',
    bg: '#d97575',
    text: colors.light,
    textShadow: colors.textShadowDark
  },
  Info: {
    border: '#29B6F6',
    bg: '#0288D1',
    text: colors.light,
    textShadow: colors.textShadowDark
  },
  Success: {
    border: '#2E7D32',
    bg: '#66BB6A',
    text: colors.light,
    textShadow: colors.textShadowDark
  }
};

export default theme;
