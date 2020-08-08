import * as React from "react";
import { connect } from "react-redux";
import ListCharacters from "../../../components/ListCharacters/ListCharacters";
import ErrorMessage from "../../../elements/ErrorMessage/ErrorMessage";
import LoadingIndicator from "../../../elements/LoadingIndicator/LoadingIndicator";
import WarningMessage from "../../../elements/WarningMessage/WarningMessage";
import { AppState } from "../../../redux";
import { CharactersState } from "../../../redux/characters/typing";

const Characters = (props: CharactersState) => {
  const { characters, request } = props;

  if (request.error) {
    return <ErrorMessage message={request.error} />;
  }

  if (request.loading) {
    return <LoadingIndicator />;
  }

  return characters && characters.length > 0 ? (
    <ListCharacters characters={characters} />
  ) : (
    <WarningMessage message="There's no character" />
  );
};

const mapStateToProps = (state: AppState): CharactersState => {
  return {
    ...state.charactersReducer,
  };
};

export default connect(mapStateToProps, {})(Characters);
