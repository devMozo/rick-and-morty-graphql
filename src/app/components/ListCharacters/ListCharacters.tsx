import * as React from "react";
import CardCharacter from "../CardCharacter/CardCharacter";
import { ListCharactersWrapper } from "./styles";
import { Props } from "./typing";

export default (props: Props) => {
  const { characters } = props;

  return (
    <ListCharactersWrapper>
      {characters &&
        characters.map((character) => (
          <CardCharacter key={character.id} character={character} />
        ))}
    </ListCharactersWrapper>
  );
};
