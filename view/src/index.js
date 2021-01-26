import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { atlasTheme } from "./components/Theme";

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={atlasTheme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,

  document.getElementById("root")
);
