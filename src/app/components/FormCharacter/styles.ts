import styled from "styled-components";
import { ThemesCommonProps } from "../../themes/typing";

export const FormCharacterWrapper = styled.section`
  max-width: 400px;
  margin: 2rem auto;
  padding: 0.5rem 1rem 1rem;
  background-color: ${(props) =>
    (props.theme as ThemesCommonProps).colors.rgb.primary};
  ${(props) =>
    (props.theme as ThemesCommonProps).shadows().centered.small.secondary};
`;

export const FormCharacterInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 0;
  color: ${(props) => props.theme.colors.rgb.secondary};
  background-color: ${(props) => props.theme.colors.rgb.primary};
  appearance: none;

  &:focus,
  &:active {
    outline: 0;
    border-bottom-color: ${(props) => props.theme.colors.rgb.info};
  }
`;

export const FormCharacterSelect = styled.select`
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 0;
  color: ${(props) => props.theme.colors.rgb.secondary};
  background-color: ${(props) => props.theme.colors.rgb.primary};
  appearance: none;

  &:focus,
  &:active {
    outline: 0;
    border-bottom-color: ${(props) => props.theme.colors.rgb.info};
  }
`;

export const FormCharacterButton = styled.button`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  font-size: ${(props) => props.theme.fontSizes.h5};
  border: 0;
  border-radius: 0;
  background-color: ${(props) => props.theme.colors.rgb.warning};
  color: ${(props) => props.theme.colors.rgb.primary};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.rgb.info};
  }
`;
