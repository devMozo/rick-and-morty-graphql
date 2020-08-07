interface ThemeColorsDefinition {
  primary: string;
  secondary: string;
  info: string;
  danger: string;
  warning: string;
}

interface ThemeColorsProps {
  rgb: ThemeColorsDefinition;
  hexa: ThemeColorsDefinition;
}

export interface ThemesCommonProps {
  colors: ThemeColorsProps;
}
