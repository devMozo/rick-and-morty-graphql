import { mount, ReactWrapper } from "enzyme";
import fetchMock from "fetch-mock";
import * as React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { ThemeProvider } from "styled-components";
import { URL_GET_CHARACTERS_API } from "../../../../api/charaters";
import store from "../../../../redux/index";
import theme from "../../../../themes/light";
import Filters, { Filters as FilterTesting } from "../Filters";

const mockStore = configureMockStore([thunk]);

describe("<Filters />", () => {
  let setStateSpy: any;
  let component: ReactWrapper<{}, {}, FilterTesting>;

  beforeEach(() => {
    component = mount(<FilterTesting />);
    setStateSpy = jest.spyOn(component.instance(), "setState");
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
        hasBeenModified: true,
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
        hasBeenModified: true,
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
        hasBeenModified: true,
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
        hasBeenModified: true,
      });
    });
  });

  describe("On Submit", () => {
    beforeEach(() => {
      component = mount(
        <ThemeProvider theme={theme}>
          <Provider store={mockStore(store.getState())}>
            <Filters />
          </Provider>
        </ThemeProvider>
      );
    });

    it("Should not dispatch any action if there isn't any change on the fields", () => {
      fetchMock.get(URL_GET_CHARACTERS_API, {}, { overwriteRoutes: false });

      const buttonToSubmit = component.find("button");
      buttonToSubmit.simulate("click");

      expect(fetchMock.called()).not.toBeTruthy();
    });

    it("Should dispatch an action if there is changes on the fields", () => {
      fetchMock.get(URL_GET_CHARACTERS_API, {}, { overwriteRoutes: false });

      const buttonToSubmit = component.find("button");
      const inputName = component.find("input").at(0);

      inputName.instance().value = "Testing Dispatch Action";
      inputName.simulate("change");

      buttonToSubmit.simulate("click");

      expect(fetchMock.called()).toBeTruthy();
    });
  });
});
