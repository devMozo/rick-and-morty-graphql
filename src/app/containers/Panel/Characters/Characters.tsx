import * as React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Character } from "../../../api/charaters";
import FormCharacter from "../../../components/FormCharacter/FormCharacter";
import { AppState } from "../../../redux";
import charactersSlice from "../../../redux/characters";
import { CharactersState } from "../../../redux/characters/typing";
import DummieCharacters from "./DummieCharacters";

const Characters = (
  props: CharactersState & {
    dispatch: ThunkDispatch<any, any, any>;
  }
) => {
  const { characters, request, dispatch } = props;
  const [form, showForm] = React.useState({
    active: false,
    character: {},
  });
  const onRemove = (characterId: number) => {
    dispatch(charactersSlice.actions.removeCharacter(characterId));
  };
  const onModify = (character: Character) => {
    showForm({
      active: true,
      character,
    });
  };

  if (form.active) {
    return <FormCharacter character={form.character as Character} />;
  }

  return (
    <DummieCharacters
      characters={characters}
      request={request}
      onModify={onModify}
      onRemove={onRemove}
    />
  );
};

const mapStateToProps = (state: AppState): CharactersState => {
  return {
    ...state.charactersReducer,
  };
};

export default connect(mapStateToProps)(Characters);
