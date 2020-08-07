import { render } from "@testing-library/react";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Character } from "../../../api/charaters";
import theme from "../../../themes/light";
import CardCharacter from "../CardCharacter";
import { Props } from "../typing";

const MOCK_LIST_CHARACTERS = require("../../../mocks/characters.json");

describe("<CardCharacter />", () => {
  const MOCK_DATA: Props = {
    character: MOCK_LIST_CHARACTERS.results[0] as Character,
  };

  test("Should fully get rendered when every props has been given", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CardCharacter {...MOCK_DATA} />
      </ThemeProvider>
    );

    expect(getByText(MOCK_DATA.character.name)).toBeInTheDocument();
    expect(getByText(MOCK_DATA.character.species)).toBeInTheDocument();
    expect(getByText(MOCK_DATA.character.gender)).toBeInTheDocument();
    expect(getByText(MOCK_DATA.character.status)).toBeInTheDocument();
  });
});
