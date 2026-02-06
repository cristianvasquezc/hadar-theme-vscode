// Base Color Definitions
const colors = {
  // Monochromes / Grays
  black: '#00000C', // Deepest background
  darkBlue: '#00030F', // Editor background
  darkGray: '#252A34', // Widgets
  hoverGray: '#1d2433', // Hover states
  borderGray: '#2f3b54', // Borders
  commentGray: '#5C6166', // Comments

  // Text Colors
  textPrimary: '#d7dce2',
  textSecondary: '#8695b7',
  textEditor: '#a2aabc',
  textDiffHeader: '#75715E',

  // Vibrant Colors
  red: '#F92672',
  green: '#A6E22E',
  yellow: '#E6DB74',
  orange: '#FD971F',
  blue: '#66D9EF',
  purple: '#AE81FF',
  white: '#F0F0F0',
  cyan: '#00FFFF',

  // Status Colors
  error: '#ff101f',
  warning: '#fed811',
  info: '#5ccfe6',
  success: '#70e000',
};

export const palette = {
  // Backgrounds
  bgDark: colors.black,
  bgEditor: colors.darkBlue,
  bgWidget: colors.darkGray,
  bgHover: colors.hoverGray,

  // UI Elements
  border: colors.borderGray,

  // Foreground / Text
  fgPrimary: colors.textPrimary,
  fgSecondary: colors.textSecondary,
  fgEditor: colors.textEditor,

  // Base Colors (Exposed for backward compatibility or direct usage)
  red: colors.red,
  green: colors.green,
  yellow: colors.yellow,
  orange: colors.orange,
  blue: colors.blue,
  purple: colors.purple,
  white: colors.white,
  cyan: colors.cyan,
  gray: colors.borderGray,

  // Status / State
  error: colors.error,
  warning: colors.warning,
  info: colors.info,
  success: colors.success,

  // Syntax Highlighting
  syntax: {
    comment: colors.commentGray,
    string: colors.yellow,
    number: colors.purple,
    variable: colors.blue,
    keyword: colors.red,
    function: colors.green,
    parameter: colors.orange,
    tag: colors.red,
    attribute: colors.green,
    constant: colors.purple,
    text: colors.white,
    diffHeader: colors.textDiffHeader,
  },
};

// Helper to add alpha to hex colors
export function withAlpha(hex: string, alpha: string): string {
  // Ensure hex is 6 digits (assumes input is normalized #RRGGBB)
  return `${hex}${alpha}`;
}
