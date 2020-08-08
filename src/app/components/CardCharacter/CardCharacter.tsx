import * as React from "react";
import { CharacterContext } from "../../containers/Panel/Characters/Characters";
import Card from "../../elements/Card/Card";
import {
  CardCharacterActions,
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
  const { onModify, onRemove } = React.useContext(CharacterContext);
  const handleOnModify = () => {
    onModify(character);
  };
  const handleOnRemove = () => {
    onRemove(character.id);
  };

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
        <CardCharacterActions>
          <button onClick={handleOnModify}> Modify </button>
          <button onClick={handleOnRemove}> Remove </button>
        </CardCharacterActions>
      </Card>
    </CardCharacterWrapper>
  );
};

export default React.memo(CardCharacter);
