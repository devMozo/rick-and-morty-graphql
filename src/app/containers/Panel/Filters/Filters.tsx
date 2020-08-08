import * as React from "react";
import { connect } from "react-redux";
import {
  CharacterGender,
  CharacterGenderArray,
  CharacterSpecies,
  CharacterSpeciesArray,
  CharacterStatus,
  CharacterStatusArray,
} from "../../../api/charaters";
import { getCharacters } from "../../../redux/characters";
import { Props, State } from "./typing";

export class Filters extends React.PureComponent<Props, State> {
  state = {
    name: "",
    status: "" as CharacterStatus,
    specie: "" as CharacterSpecies,
    gender: "" as CharacterGender,
    hasBeenModified: false,
  };

  handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
      hasBeenModified: true,
    });
  };

  handleOnChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      status: event.target.value as CharacterStatus,
      hasBeenModified: true,
    });
  };

  handleOnChangeSpecies = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      specie: event.target.value as CharacterSpecies,
      hasBeenModified: true,
    });
  };

  handleOnChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      gender: event.target.value as CharacterGender,
      hasBeenModified: true,
    });
  };

  handleOnFilter = () => {
    const { dispatch } = this.props;
    const { hasBeenModified } = this.state;

    if (hasBeenModified) {
      dispatch(getCharacters());
    }
  };

  render() {
    return (
      <>
        <input type="text" onChange={this.handleOnChangeName} />

        <select onChange={this.handleOnChangeStatus}>
          {CharacterStatusArray.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <select onChange={this.handleOnChangeSpecies}>
          {CharacterSpeciesArray.map((specie) => (
            <option key={specie} value={specie}>
              {specie}
            </option>
          ))}
        </select>

        <select onChange={this.handleOnChangeGender}>
          {CharacterGenderArray.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>

        <button onClick={this.handleOnFilter}> Filter </button>
      </>
    );
  }
}

export default connect()(Filters);
