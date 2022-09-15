import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./contexts/theme";
import Authentication from "./components/Authentication/Authentication";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Authentication />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
