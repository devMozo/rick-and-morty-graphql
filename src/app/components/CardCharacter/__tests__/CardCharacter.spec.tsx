import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Character } from "../../../api/charaters";
import { CharacterContext } from "../../../containers/Panel/Characters/context";
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

  test("Should trigger an action when the modify's button was clicked", () => {
    const mockFunction = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CharacterContext.Provider
          value={{
            onModify: mockFunction,
          }}
        >
          <CardCharacter {...MOCK_DATA} />
        </CharacterContext.Provider>
      </ThemeProvider>
    );

    fireEvent.click(getByText("Modify"));

    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith({
      id: MOCK_DATA.character.id,
      name: MOCK_DATA.character.name,
      image: MOCK_DATA.character.image,
      species: MOCK_DATA.character.species,
      gender: MOCK_DATA.character.gender,
      status: MOCK_DATA.character.status,
    });
  });

  test("Should trigger an action when the remove's button was clicked", () => {
    const mockFunction = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CharacterContext.Provider
          value={{
            onRemove: mockFunction,
          }}
        >
          <CardCharacter {...MOCK_DATA} />
        </CharacterContext.Provider>
      </ThemeProvider>
    );

    fireEvent.click(getByText("Remove"));

    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith(MOCK_DATA.character.id);
  });
});
