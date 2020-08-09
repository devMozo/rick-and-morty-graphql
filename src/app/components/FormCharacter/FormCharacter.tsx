import * as React from "react";
import {
  CharacterGender,
  CharacterGenderArray,
  CharacterSpecies,
  CharacterSpeciesArray,
  CharacterStatus,
  CharacterStatusArray,
} from "../../api/charaters";
import {
  FormCharacterButton,
  FormCharacterInput,
  FormCharacterSelect,
  FormCharacterWrapper,
} from "./styles";
import { Props, State } from "./typing";

export class FormCharacter extends React.PureComponent<Props, State> {
  state = {
    name: this.props.character.name || "",
    status: "" as CharacterStatus,
    species: "" as CharacterSpecies,
    gender: "" as CharacterGender,
  };

  handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      status: event.target.value as CharacterStatus,
    });
  };

  handleOnChangeSpecies = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      species: event.target.value as CharacterSpecies,
    });
  };

  handleOnChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      gender: event.target.value as CharacterGender,
    });
  };

  handleOnFilter = () => {
    const { name, status, species, gender } = this.state;
  };

  render() {
    return (
      <FormCharacterWrapper>
        <h3> Create New One </h3>
        <FormCharacterInput
          type="text"
          placeholder="Rick Sanchez"
          onChange={this.handleOnChangeName}
        />

        <FormCharacterSelect onChange={this.handleOnChangeStatus}>
          <option value="disabled" disabled selected>
            Select a Status...
          </option>
          {CharacterStatusArray.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </FormCharacterSelect>

        <FormCharacterSelect onChange={this.handleOnChangeSpecies}>
          <option value="disabled" disabled selected>
            Select a Specie...
          </option>
          {CharacterSpeciesArray.map((specie) => (
            <option key={specie} value={specie}>
              {specie}
            </option>
          ))}
        </FormCharacterSelect>

        <FormCharacterSelect onChange={this.handleOnChangeGender}>
          <option value="disabled" disabled selected>
            Select a Gender...
          </option>
          {CharacterGenderArray.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </FormCharacterSelect>

        <FormCharacterButton onClick={this.handleOnFilter}>
          Let Modify It!
        </FormCharacterButton>
      </FormCharacterWrapper>
    );
  }
}

export default FormCharacter;
