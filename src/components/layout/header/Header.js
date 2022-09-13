import * as React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme";

import styles from "./Header.module.css";

import Toolbar from "@mui/material/Toolbar";

import Logo from "../logo/Logo";
import Navigation from "../Navigation/Navigation";
import ActionButton from "../../global/ActionButton";
import { Button } from "@mui/material";
import LightDarkThemeButtonMUI from "../../LightDarkModeMUI_Button";


export default function Header({ navlinks }) {

  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <Toolbar className={theme === "light" ? styles.toolbar_light : styles.toolbar_dark} >
      <Logo />
      <Navigation navlinks={navlinks} />
      <ActionButton
        variant="contained"
        color="primary"
        type="submit"
        text="Get It Now"
      />
      <Button onClick={(e) => setTheme(theme === "light" ? "dark" : "light")}><LightDarkThemeButtonMUI /></Button>
      {/* <Button color="secondary" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change theme</Button> */}
    </Toolbar>
  );
}
