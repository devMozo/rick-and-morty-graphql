import * as React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../../redux/characters";
import Characters from "./Characters/Characters";
import Filters from "./Filters/Filters";
import {
  PanelCharactersSection,
  PanelFiltersSection,
  PanelWrapper,
} from "./styles";
import { PanelProps } from "./typing";

class Panel extends React.PureComponent<PanelProps> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getCharacters({}));
  }

  render() {
    return (
      <PanelWrapper>
        <PanelFiltersSection>
          <Filters />
        </PanelFiltersSection>
        <PanelCharactersSection>
          <Characters />
        </PanelCharactersSection>
      </PanelWrapper>
    );
  }
}

export default connect()(Panel);
