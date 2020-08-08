import { mount } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";
import ListCharacters from "../../../../components/ListCharacters/ListCharacters";
import ErrorMessage from "../../../../elements/ErrorMessage/ErrorMessage";
import LoadingIndicator from "../../../../elements/LoadingIndicator/LoadingIndicator";
import WarningMessage from "../../../../elements/WarningMessage/WarningMessage";
import store from "../../../../redux/index";
import theme from "../../../../themes/light";
import Characters from "../Characters";

const MOCK_LIST_CHARACTERS = require("../../../../mocks/characters.json");
const mockStore = configureMockStore([]);

describe("<Characters />", () => {
  test("Should display only a LoadingIndator when the request is ongoing", () => {
    const charactersReducer = {
      ...store.getState().charactersReducer,
      request: {
        loading: true,
      },
    };

    const component = mount(
      <ThemeProvider theme={theme}>
        <Provider store={mockStore({ charactersReducer })}>
          <Characters />
        </Provider>
      </ThemeProvider>
    );

    expect(component.find(WarningMessage).get(0)).not.toBeDefined();
    expect(component.find(ErrorMessage).get(0)).not.toBeDefined();
    expect(component.find(LoadingIndicator).get(0)).toBeDefined();
    expect(component.find(ListCharacters).get(0)).not.toBeDefined();
  });

  test("Should display only a ListCharacters when the request is done and with at least one character", () => {
    const charactersReducer = {
      ...store.getState().charactersReducer,
      characters: MOCK_LIST_CHARACTERS.results,
      request: {
        loading: false,
      },
    };

    const component = mount(
      <ThemeProvider theme={theme}>
        <Provider store={mockStore({ charactersReducer })}>
          <Characters />
        </Provider>
      </ThemeProvider>
    );

    expect(component.find(WarningMessage).get(0)).not.toBeDefined();
    expect(component.find(ErrorMessage).get(0)).not.toBeDefined();
    expect(component.find(LoadingIndicator).get(0)).not.toBeDefined();
    expect(component.find(ListCharacters).get(0)).toBeDefined();
  });

  test("Should display a WarningMessage when the request is done and zero characters", () => {
    const charactersReducer = {
      ...store.getState().charactersReducer,
      request: {
        loading: false,
      },
    };

    const component = mount(
      <ThemeProvider theme={theme}>
        <Provider store={mockStore({ charactersReducer })}>
          <Characters />
        </Provider>
      </ThemeProvider>
    );

    expect(component.find(WarningMessage).get(0)).toBeDefined();
    expect(component.find(ErrorMessage).get(0)).not.toBeDefined();
    expect(component.find(LoadingIndicator).get(0)).not.toBeDefined();
    expect(component.find(ListCharacters).get(0)).not.toBeDefined();
  });

  test("Should display an ErrorMessage when the request has triggered an error", () => {
    const errorMessage = "An error has occurred.";
    const charactersReducer = {
      ...store.getState().charactersReducer,
      request: {
        error: errorMessage,
      },
    };

    const component = mount(
      <ThemeProvider theme={theme}>
        <Provider store={mockStore({ charactersReducer })}>
          <Characters />
        </Provider>
      </ThemeProvider>
    );
    const errorMessageComponent = component.find(ErrorMessage);

    expect(component.find(WarningMessage).get(0)).not.toBeDefined();
    expect(errorMessageComponent.get(0)).toBeDefined();
    expect(errorMessageComponent.text()).toContain(errorMessage);
    expect(component.find(LoadingIndicator).get(0)).not.toBeDefined();
    expect(component.find(ListCharacters).get(0)).not.toBeDefined();
  });
});
