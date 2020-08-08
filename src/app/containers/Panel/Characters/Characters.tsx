import * as React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Character } from "../../../api/charaters";
import ListCharacters from "../../../components/ListCharacters/ListCharacters";
import ErrorMessage from "../../../elements/ErrorMessage/ErrorMessage";
import LoadingIndicator from "../../../elements/LoadingIndicator/LoadingIndicator";
import WarningMessage from "../../../elements/WarningMessage/WarningMessage";
import { AppState } from "../../../redux";
import charactersSlice from "../../../redux/characters";
import { CharactersState } from "../../../redux/characters/typing";

export const CharacterContext = React.createContext({
  onRemove: (characterId: number) => {},
  onModify: (character: Character) => {},
});

const Characters = (
  props: CharactersState & {
    dispatch: ThunkDispatch<any, any, any>;
  }
) => {
  const { characters, request, dispatch } = props;
  const onRemove = (characterId: number) => {
    dispatch(charactersSlice.actions.removeCharacter(characterId));
  };
  const onModify = (character: Character) => {
    dispatch(charactersSlice.actions.modifyCharacter(character));
  };

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

const mapStateToProps = (state: AppState): CharactersState => {
  return {
    ...state.charactersReducer,
  };
};

export default connect(mapStateToProps)(Characters);
