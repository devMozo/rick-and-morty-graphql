import styled from "styled-components";

export const ErrorMessageWrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 3rem 0;
  font-size: ${(props) => props.theme.fontSizes.h3};
  color: ${(props) => props.theme.colors.rgb.danger};
  opacity: 0.5;
`;
