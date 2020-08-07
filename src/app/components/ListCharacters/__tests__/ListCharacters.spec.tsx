import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";
import { Character } from "../../../api/charaters";
import CardCharacter from "../../CardCharacter/CardCharacter";
import ListCharacters from "../ListCharacters";

const MOCK_LIST_CHARACTERS = require("../../../mocks/characters.json");

describe("<ListCharacters />", () => {
  const MOCK_DATA = {
    characters: MOCK_LIST_CHARACTERS.results as Character[],
  };

  test("Should display every character as a properly list of cards", () => {
    const wrapper: ShallowWrapper = shallow(<ListCharacters {...MOCK_DATA} />);
    const cards = wrapper.find(CardCharacter);

    expect(cards).toHaveLength(MOCK_DATA.characters.length);
  });

  test("Should trigger an event when the user react to the bottom of the component", () => {
    const wrapper: ShallowWrapper = shallow(<ListCharacters {...MOCK_DATA} />);
    const cards = wrapper.find(CardCharacter);

    expect(cards).toHaveLength(MOCK_DATA.characters.length);
  });
});
