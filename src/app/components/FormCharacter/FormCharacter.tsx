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
  FormCharacterButtonCancel,
  FormCharacterInput,
  FormCharacterSelect,
  FormCharacterWrapper,
} from "./styles";
import { Props, State } from "./typing";

class FormCharacter extends React.PureComponent<Props, State> {
  state = this.props.character
    ? this.props.character
    : {
        id: 0,
        name: "",
        image: "",
        status: "" as CharacterStatus,
        species: "" as CharacterSpecies,
        gender: "" as CharacterGender,
      };

  editingMode = () => Boolean(this.state.id > 0);

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

  handleOnModify = () => {
    const { onModify } = this.props;

    if (onModify) {
      onModify(this.state);
    }
  };

  handleOnCreate = () => {
    const { onCreate } = this.props;
    const { name, status, species, gender } = this.state;

    if (onCreate) {
      onCreate({
        ...this.state,
        name: name || "Not defined",
        status: status || CharacterStatusArray[0],
        species: species || CharacterSpeciesArray[0],
        gender: gender || CharacterGenderArray[0],
      });
    }
  };

  handleOnCancel = () => {
    const { onCancel } = this.props;

    if (onCancel) {
      onCancel();
    }
  };

  render() {
    const { name, status, species, gender } = this.state;

    return (
      <FormCharacterWrapper>
        {this.editingMode() ? (
          <h3> Editing {name} </h3>
        ) : (
          <h3> Create New One </h3>
        )}

        <FormCharacterInput
          type="text"
          defaultValue={name}
          placeholder="Rick Sanchez"
          onChange={this.handleOnChangeName}
        />

        <FormCharacterSelect
          defaultValue={status}
          onChange={this.handleOnChangeStatus}
        >
          <option value="disabled" disabled>
            Select a Status...
          </option>
          {CharacterStatusArray.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </FormCharacterSelect>

        <FormCharacterSelect
          defaultValue={species}
          onChange={this.handleOnChangeSpecies}
        >
          <option value="disabled" disabled>
            Select a Specie...
          </option>
          {CharacterSpeciesArray.map((specie) => (
            <option key={specie} value={specie}>
              {specie}
            </option>
          ))}
        </FormCharacterSelect>

        <FormCharacterSelect
          defaultValue={gender}
          onChange={this.handleOnChangeGender}
        >
          <option value="disabled" disabled>
            Select a Gender...
          </option>
          {CharacterGenderArray.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </FormCharacterSelect>

        {this.editingMode() ? (
          <FormCharacterButton onClick={this.handleOnModify}>
            Let Modify It!
          </FormCharacterButton>
        ) : (
          <FormCharacterButton onClick={this.handleOnCreate}>
            Wubba Lubba dub-dub
          </FormCharacterButton>
        )}
        <FormCharacterButtonCancel onClick={this.handleOnCancel}>
          Cancel
        </FormCharacterButtonCancel>
      </FormCharacterWrapper>
    );
  }
}

export default FormCharacter;
