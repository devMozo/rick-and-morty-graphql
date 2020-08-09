import * as React from "react";
import { Character } from "../../../api/charaters";
import ListCharacters from "../../../components/ListCharacters/ListCharacters";
import ErrorMessage from "../../../elements/ErrorMessage/ErrorMessage";
import LoadingIndicator from "../../../elements/LoadingIndicator/LoadingIndicator";
import WarningMessage from "../../../elements/WarningMessage/WarningMessage";
import { CharactersState } from "../../../redux/characters/typing";
import { CharacterContext } from "./context";

export default (
  props: CharactersState & {
    onRemove: (characterId: number) => void;
    onModify: (character: Character) => void;
  }
) => {
  const { request, characters, onRemove, onModify } = props;

  if (request.error) {
    return <ErrorMessage message={request.error} />;
  }

  if (request.loading) {
    return <LoadingIndicator />;
  }

  return characters && characters.length > 0 ? (
    <CharacterContext.Provider
      value={{
        onRemove,
        onModify,
      }}
    >
      <ListCharacters characters={characters} />
    </CharacterContext.Provider>
  ) : (
    <WarningMessage message="There's no character" />
  );
};
