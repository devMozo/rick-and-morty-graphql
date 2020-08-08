import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Panel from "./containers/Panel/Panel";
import store from "./redux/index";
import theme from "./themes/light";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Panel />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
