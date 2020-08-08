import styled from "styled-components";

export const CardCharacterWrapper = styled.article`
  flex: 50%;
  padding: 1rem;
  box-sizing: border-box;
`;

export const CardCharacterImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const CardCharacterContent = styled.div`
  padding: 1rem;
  position: relative;
`;

export const CardCharacterTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes.h4};
  color: ${(props) => props.theme.colors.rgb.secondary};
  font-weight: 700;
`;

export const CardCharacterFeatures = styled.ul`
  margin: 1rem 0;
  padding: 0;
  list-style: none;

  li {
    font-size: ${(props) => props.theme.fontSizes.h5};
    color: ${(props) => props.theme.colors.rgb.secondary};
    font-weight: 200;

    b {
      color: ${(props) => props.theme.colors.rgb.info};
      font-weight: 900;
    }
  }
`;

export const CardCharacterID = styled.span`
  position: absolute;
  right: 20px;
  top: 0;
  font-size: 100px;
  color: ${(props) => props.theme.colors.rgb.secondary};
  opacity: 0.2;
`;
