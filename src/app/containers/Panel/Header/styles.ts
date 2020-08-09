import styled from "styled-components";
import { ThemesCommonProps } from "../../../themes/typing";

export const HeaderWrapper = styled.section`
  padding: 1rem;
  margin: 2rem 1rem 0;
  text-align: right;
  box-sizing: border-box;
  ${(props) =>
    (props.theme as ThemesCommonProps).shadows().centered.small.secondary};

  button {
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    color: white;
    border: 0;
    border-radius: 0;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.rgb.warning};

    &:hover {
      background-color: ${(props) => props.theme.colors.rgb.secondary};
    }
  }
`;
