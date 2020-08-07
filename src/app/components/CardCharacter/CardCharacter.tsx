import * as React from "react";
import Card from "../../elements/Card/Card";
import {
  CardCharacterFeature,
  CardCharacterFeatures,
  CardCharacterID,
  CardCharacterImage,
  CardCharacterTitle,
} from "./styles";
import { Props } from "./typing";

export default (props: Props) => {
  const { character } = props;

  return (
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
  );
};
