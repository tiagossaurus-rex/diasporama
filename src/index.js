import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./App";
import MouseContextProvider from "./context/mouse-context";

ReactDOM.render(
  <>
    <MouseContextProvider>
      <GlobalStyles />
      <App />
    </MouseContextProvider>
  </>,
  document.getElementById("root")
);
