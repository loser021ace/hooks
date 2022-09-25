import { StrictMode } from "react";
import ReactDom from "react-dom";
import React from "react";
import App from "./App";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
