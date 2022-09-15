import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Authentication from "./components/Authentication/Authentication";

import "./index.css";


import { ThemeProvider } from "./contexts/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Authentication />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
