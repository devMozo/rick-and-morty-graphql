import styled from "styled-components";

export const LoadingIndicatorWrapper = styled.section`
  width: 40px;
  height: 40px;
  margin: 3rem auto;
  border: 4px solid #eee;
  border-top: 4px solid ${(props) => props.theme.colors.rgb.info};
  border-radius: 50%;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
