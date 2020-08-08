import * as React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../../redux/characters";
import Characters from "./Characters/Characters";
import { PanelCharactersSection, PanelWrapper } from "./styles";
import { PanelProps } from "./typing";

class Panel extends React.PureComponent<PanelProps> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getCharacters());
  }

  render() {
    return (
      <PanelWrapper>
        <PanelCharactersSection>
          <Characters />
        </PanelCharactersSection>
      </PanelWrapper>
    );
  }
}

export default connect()(Panel);
