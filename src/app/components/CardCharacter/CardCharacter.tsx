import * as React from "react";
import Card from "../../elements/Card/Card";
import {
  CardCharacterFeature,
  CardCharacterFeatures,
  CardCharacterID,
  CardCharacterImage,
  CardCharacterTitle,
  CardCharacterWrapper,
} from "./styles";
import { Props } from "./typing";

const CardCharacter = (props: Props) => {
  const { character } = props;

  return (
    <CardCharacterWrapper>
      <Card>
        <CardCharacterImage src={character.image} alt={character.name} />
        <CardCharacterTitle> {character.name} </CardCharacterTitle>
        <CardCharacterFeatures>
          <CardCharacterFeature> {character.species} </CardCharacterFeature>
          <CardCharacterFeature> {character.status} </CardCharacterFeature>
          <CardCharacterFeature> {character.gender} </CardCharacterFeature>
        </CardCharacterFeatures>
        <CardCharacterID> {character.id} </CardCharacterID>
      </Card>
    </CardCharacterWrapper>
  );
};

export default React.memo(CardCharacter);
