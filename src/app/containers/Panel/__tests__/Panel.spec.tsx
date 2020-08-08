import { mount } from "enzyme";
import fetchMock from "fetch-mock";
import * as React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { ThemeProvider } from "styled-components";
import { URL_GET_CHARACTERS_API } from "../../../api/charaters";
import store from "../../../redux/index";
import theme from "../../../themes/light";
import Panel from "../Panel";

const MOCK_CHARACTER_API = require("../../../mocks/charactersAPI.json");
const mockStore = configureMockStore([thunk]);

describe("<Panel />", () => {
  it("Should dispatch action to get characters on mounted", () => {
    fetchMock.getOnce(URL_GET_CHARACTERS_API, {
      body: MOCK_CHARACTER_API,
      headers: { "content-type": "application/json" },
    });
    mount(
      <ThemeProvider theme={theme}>
        <Provider store={mockStore(store.getState())}>
          <Panel />
        </Provider>
      </ThemeProvider>
    );

    expect(fetchMock.called()).toBeTruthy();
  });
});
