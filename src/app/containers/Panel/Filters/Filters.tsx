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
import {
  FiltersButton,
  FiltersInput,
  FiltersSelect,
  FiltersWrapper,
} from "./styles";
import { Props, State } from "./typing";

export class Filters extends React.PureComponent<Props, State> {
  state = {
    name: "",
    status: "" as CharacterStatus,
    species: "" as CharacterSpecies,
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
      species: event.target.value as CharacterSpecies,
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
    const { name, status, species, gender, hasBeenModified } = this.state;

    if (hasBeenModified && dispatch) {
      dispatch(
        getCharacters({
          name,
          status,
          species,
          gender,
        })
      );
    }
  };

  render() {
    return (
      <FiltersWrapper>
        <h3> Filters </h3>
        <FiltersInput
          type="text"
          placeholder="Rick Sanchez"
          onChange={this.handleOnChangeName}
        />

        <FiltersSelect onChange={this.handleOnChangeStatus}>
          <option value="disabled" disabled selected>
            Select a Status...
          </option>
          <option value={""}>All</option>
          {CharacterStatusArray.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </FiltersSelect>

        <FiltersSelect onChange={this.handleOnChangeSpecies}>
          <option value="disabled" disabled selected>
            Select a Specie...
          </option>
          <option value={""}>All</option>
          {CharacterSpeciesArray.map((specie) => (
            <option key={specie} value={specie}>
              {specie}
            </option>
          ))}
        </FiltersSelect>

        <FiltersSelect onChange={this.handleOnChangeGender}>
          <option value="disabled" disabled selected>
            Select a Gender...
          </option>
          <option value={""}>All</option>
          {CharacterGenderArray.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </FiltersSelect>

        <FiltersButton onClick={this.handleOnFilter}>
          Mr. Meeseeks Filter It!
        </FiltersButton>
      </FiltersWrapper>
    );
  }
}

export default connect()(Filters);
