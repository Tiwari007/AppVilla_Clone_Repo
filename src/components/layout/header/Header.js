import * as React from "react";
import { useContext } from "react";
import { AppVillaContext } from "../../../contexts/theme";

import styles from "./Header.module.css";

import Toolbar from "@mui/material/Toolbar";

import Logo from "../logo/Logo";
import Navigation from "../Navigation/Navigation";
import ActionButton from "../../global/ActionButton";
import LightDarkThemeButtonMUI from "../../LightDarkModeMUI_Button";


export default function Header({ navlinks }) {

  const { setTheme, theme, setIsLogged } = useContext(AppVillaContext);

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
      <ActionButton variant="contained"
        color="secondary"
        type="submit"
        text="Logout" onClick={() => {setIsLogged(false)}} />
      <ActionButton onClick={(e) => setTheme(theme === "light" ? "dark" : "light")} text={<LightDarkThemeButtonMUI />}></ActionButton>
    </Toolbar>
  );
}
