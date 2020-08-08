import { ThemesCommonProps } from "./typing";
import { generateShadow } from "./utilities";

const theme: ThemesCommonProps = {
  colors: {
    rgb: {
      primary: "rgba(253, 255, 252, 1)",
      secondary: "rgba(1, 22, 39, 1)",
      info: "rgba(46, 196, 182, 1)",
      danger: "rgba(231, 29, 54, 1)",
      warning: "rgba(255, 159, 28, 1)",
    },
    hexa: {
      primary: "#fdfffcff",
      secondary: "#011627ff",
      info: "#2ec4b6ff",
      danger: "#e71d36ff",
      warning: "#ff9f1cff",
    },
  },
  shadows: function () {
    return generateShadow(this);
  },
  fontSizes: {
    h1: "28px",
    h2: "24px",
    h3: "20px",
    h4: "18px",
    h5: "16px",
    h6: "12px",
  },
};

export default theme;
