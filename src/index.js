import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { CompletedContextProvider } from "./components/store/completed-context";

ReactDOM.render(
  <CompletedContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CompletedContextProvider>,
  document.getElementById("root")
);
