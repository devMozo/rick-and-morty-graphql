import { mount } from "enzyme";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../../themes/light";
import Header from "../Header";

describe("<Header />", () => {
  it("Should trigger an action when the button is created", () => {
    const mockedFunctionToModify = jest.fn();
    const component = mount(
      <ThemeProvider theme={theme}>
        <Header onPressCreationButton={mockedFunctionToModify} />
      </ThemeProvider>
    );
    const buttonToSubmit = component.find("button").at(0);

    buttonToSubmit.simulate("click");

    expect(mockedFunctionToModify).toHaveBeenCalled();
  });
});
