import { ThemesCommonProps } from "./typing";
import { generateShadow } from "./utilities";

const theme: ThemesCommonProps = {
  colors: {
    rgb: {
      secondary: "rgba(253, 255, 252, 1)",
      primary: "rgba(1, 22, 39, 1)",
      info: "rgba(46, 196, 182, 1)",
      danger: "rgba(231, 29, 54, 1)",
      warning: "rgba(255, 159, 28, 1)",
    },
    hexa: {
      secondary: "#fdfffcff",
      primary: "#011627ff",
      info: "#2ec4b6ff",
      danger: "#e71d36ff",
      warning: "#ff9f1cff",
    },
  },
  shadows: function () {
    return generateShadow(this);
  },
};

export default theme;