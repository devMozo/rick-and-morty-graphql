export interface ThemeTypesDefinition {
  primary: string;
  secondary: string;
  info: string;
  danger: string;
  warning: string;
  [index: string]: string;
}

export interface ThemeColors {
  rgb: ThemeTypesDefinition;
  hexa: ThemeTypesDefinition;
}

type ThemeShadowSize = "small" | "medium" | "big";

export type RecordShadowDefinition = Record<
  ThemeShadowSize,
  ThemeTypesDefinition
>;

export interface ThemeShadows {
  cross: RecordShadowDefinition;
  centered: RecordShadowDefinition;
}

export interface FontSizes {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
}

export interface ThemesCommonProps {
  colors: ThemeColors;
  fontSizes: FontSizes;
  shadows: () => ThemeShadows;
}
