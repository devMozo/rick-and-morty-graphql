import { shallow } from "enzyme";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/light";
import Card from "../Card";

describe("<Card />", () => {
  test("Should render the given components inside it", () => {
    const text = "This is a children.";
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <Card>
          <p>{text}</p>
        </Card>
      </ThemeProvider>
    );

    const paragraph = wrapper.find("p").get(0);

    expect(paragraph).toBeDefined();
    expect(paragraph.props.children).toEqual(text);
  });
});
