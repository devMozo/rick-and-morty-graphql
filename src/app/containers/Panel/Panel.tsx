import * as React from "react";
import { connect } from "react-redux";
import { Character } from "../../api/charaters";
import FormCharacter from "../../components/FormCharacter/FormCharacter";
import characters, { getCharacters } from "../../redux/characters";
import Characters from "./Characters/Characters";
import Filters from "./Filters/Filters";
import Header from "./Header/Header";
import {
  PanelCharactersSection,
  PanelFiltersSection,
  PanelWrapper,
} from "./styles";
import { PanelProps } from "./typing";

class Panel extends React.PureComponent<PanelProps> {
  state = {
    formOpen: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getCharacters({}));
  }

  openCreationForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeCreationForm = () => {
    this.setState({
      formOpen: false,
    });
  };

  createNewCharacter = (character: Character) => {
    const { dispatch } = this.props;

    dispatch(characters.actions.createCharacter(character));
    this.closeCreationForm();
  };

  render() {
    const { formOpen } = this.state;

    return (
      <PanelWrapper>
        <PanelFiltersSection>
          <Filters />
        </PanelFiltersSection>
        <PanelCharactersSection>
          {formOpen ? (
            <FormCharacter
              onCreate={this.createNewCharacter}
              onCancel={this.closeCreationForm}
            />
          ) : (
            <>
              <Header onPressCreationButton={this.openCreationForm} />
              <Characters />
            </>
          )}
        </PanelCharactersSection>
      </PanelWrapper>
    );
  }
}

export default connect()(Panel);
