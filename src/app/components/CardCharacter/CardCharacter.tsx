import * as React from "react";
import Card from "../../elements/Card/Card";
import {
  CardCharacterContent,
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
        <CardCharacterContent>
          <CardCharacterTitle> {character.name} </CardCharacterTitle>
          <CardCharacterFeatures>
            <li>
              <b> Specie: </b> {character.species}
            </li>
            <li>
              <b> Status: </b> {character.status}
            </li>
            <li>
              <b> Gender: </b> {character.gender}
            </li>
          </CardCharacterFeatures>
          <CardCharacterID> {character.id} </CardCharacterID>
        </CardCharacterContent>
      </Card>
    </CardCharacterWrapper>
  );
};

export default React.memo(CardCharacter);
