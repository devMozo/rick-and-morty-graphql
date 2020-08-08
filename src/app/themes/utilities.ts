import { ThemesCommonProps, ThemeTypesDefinition } from "./typing";

export function generateShadow(context: ThemesCommonProps) {
  const {
    colors: { rgb },
  } = context;
  const getShadow = (prefix: string): ThemeTypesDefinition => {
    const definitions: ThemeTypesDefinition = {
      ...rgb,
    };

    for (const type in rgb as ThemeTypesDefinition) {
      if (rgb.hasOwnProperty(type)) {
        definitions[type] = prefix + " " + rgb[type];
      }
    }

    return definitions;
  };

  return {
    cross: {
      small: getShadow("box-shadow: 10px 10px 10px -10px"),
      medium: getShadow("box-shadow: 10px 10px 25px -10px"),
      big: getShadow("box-shadow: 10px 10px 40px 10px"),
    },
    centered: {
      small: getShadow("box-shadow: 0px 0px 10px -10px"),
      medium: getShadow("box-shadow: 0px 0px 25px -10px"),
      big: getShadow("box-shadow: 0px 0px 40px 10px"),
    },
  };
}
