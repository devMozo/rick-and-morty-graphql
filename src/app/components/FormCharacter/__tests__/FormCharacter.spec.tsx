import { mount, ReactWrapper } from "enzyme";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Character } from "../../../api/charaters";
import theme from "../../../themes/light";
import FormCharacter from "../FormCharacter";

const MOCK_LIST_CHARACTERS = require("../../../mocks/characters.json");

describe("<FormCharacter />", () => {
  let setStateSpy: any;
  let component: ReactWrapper<{}, {}, FormCharacter>;

  beforeEach(() => {
    component = mount(
      <ThemeProvider theme={theme}>
        <FormCharacter />
      </ThemeProvider>
    );
    setStateSpy = jest.spyOn(
      component.find(FormCharacter).instance(),
      "setState"
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Name input", () => {
    it("Should capture name correctly onChange", () => {
      const inputName = component.find("input").at(0);
      const valueToTest = "Testing Value";

      inputName.instance().value = valueToTest;
      inputName.simulate("change");

      expect(setStateSpy).toHaveBeenCalled();
      expect(setStateSpy).toHaveBeenCalledWith({
        name: valueToTest,
      });
    });
  });

  describe("Status' selector", () => {
    it("Should capture name correctly onChange", () => {
      const statusSelector = component.find("select").at(0);
      const option = statusSelector.find("option").at(2);

      option.simulate("click");
      statusSelector.simulate("change", {
        target: { value: option.props().value },
      });

      expect(setStateSpy).toHaveBeenCalled();
      expect(setStateSpy).toHaveBeenCalledWith({
        status: option.props().value,
      });
    });
  });

  describe("Species' selector", () => {
    it("Should capture name correctly onChange", () => {
      const statusSelector = component.find("select").at(1);
      const option = statusSelector.find("option").at(2);

      option.simulate("click");
      statusSelector.simulate("change", {
        target: { value: option.props().value },
      });

      expect(setStateSpy).toHaveBeenCalled();
      expect(setStateSpy).toHaveBeenCalledWith({
        species: option.props().value,
      });
    });
  });

  describe("Gender' selector", () => {
    it("Should capture name correctly onChange", () => {
      const statusSelector = component.find("select").at(2);
      const option = statusSelector.find("option").at(2);

      option.simulate("click");
      statusSelector.simulate("change", {
        target: { value: option.props().value },
      });

      expect(setStateSpy).toHaveBeenCalled();
      expect(setStateSpy).toHaveBeenCalledWith({
        gender: option.props().value,
      });
    });
  });

  it("Should dispatch an action on click onto the creation's button", () => {
    const mockedFunctionToModify = jest.fn();
    component = mount(
      <ThemeProvider theme={theme}>
        <FormCharacter onCreate={mockedFunctionToModify} />
      </ThemeProvider>
    );
    const buttonToSubmit = component.find("button").at(0);

    buttonToSubmit.simulate("click");

    expect(mockedFunctionToModify).toHaveBeenCalled();
  });

  describe("Editing Mode", () => {
    const MOCK_DATA = {
      character: MOCK_LIST_CHARACTERS.results[0] as Character,
    };

    beforeEach(() => {
      component = mount(
        <ThemeProvider theme={theme}>
          <FormCharacter character={MOCK_DATA.character} />
        </ThemeProvider>
      );
    });

    it('Should display the "Editing" + the given name as a title', () => {
      const inputName = component.find("h3").at(0);

      expect(inputName.text()).toContain("Editing " + MOCK_DATA.character.name);
    });

    it("Should display the given name into input texts", () => {
      const inputName = component.find("input").at(0);

      expect(inputName.prop("defaultValue")).toBe(MOCK_DATA.character.name);
    });

    it("Should display the given status into select box", () => {
      const selectBox = component.find("select").at(0);

      expect(selectBox.prop("defaultValue")).toBe(MOCK_DATA.character.status);
    });

    it("Should display the given species into select box", () => {
      const selectBox = component.find("select").at(1);

      expect(selectBox.prop("defaultValue")).toBe(MOCK_DATA.character.species);
    });

    it("Should display the given gender into select box", () => {
      const selectBox = component.find("select").at(2);

      expect(selectBox.prop("defaultValue")).toBe(MOCK_DATA.character.gender);
    });

    it("Should dispatch an action on click onto the modification's button", () => {
      const mockedFunctionToModify = jest.fn();
      component = mount(
        <ThemeProvider theme={theme}>
          <FormCharacter
            character={MOCK_DATA.character}
            onModify={mockedFunctionToModify}
          />
        </ThemeProvider>
      );
      const buttonToSubmit = component.find("button").at(0);

      buttonToSubmit.simulate("click");

      expect(mockedFunctionToModify).toHaveBeenCalled();
    });
  });
});
