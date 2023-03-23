import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./pages/app/App.page";
import theme from "./theme";
// import { Provider } from "react-redux";
// import store from "./store/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";

ReactDOM.render(
  // <Provider store={store}>
  <ApiProvider api={apiSlice}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ApiProvider>,
  // </Provider>,
  document.getElementById("root")
);
