import styled from "styled-components";
import { ThemesCommonProps } from "../../themes/typing";

export const CardWrapper = styled.section`
  background-color: ${(props) =>
    (props.theme as ThemesCommonProps).colors.rgb.primary};
  transition: 0.3s;
  ${(props) =>
    (props.theme as ThemesCommonProps).shadows().centered.small.secondary};

  &:hover {
    ${(props) =>
      (props.theme as ThemesCommonProps).shadows().centered.medium.secondary};
  }
`;
