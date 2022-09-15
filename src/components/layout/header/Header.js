import * as React from "react";
import { useContext } from "react";
import { AppVillaContext } from "../../../contexts/theme";

import styles from "./Header.module.css";

import Toolbar from "@mui/material/Toolbar";

import Logo from "../logo/Logo";
import Navigation from "../Navigation/Navigation";
import ActionButton from "../../global/ActionButton";
import LightDarkThemeButtonMUI from "../../content/LightDarkModeMUI_Button";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header({ navlinks }) {
  const { theme, setIsLogged } = useContext(AppVillaContext);

  return (
    <Toolbar
      className={theme === "light" ? styles.toolbar_light : styles.toolbar_dark}
    >
      <Logo />
      <Navigation navlinks={navlinks} />
      <ActionButton
        variant="contained"
        color="primary"
        type="submit"
        text="Get It Now"
      />
      <ActionButton
        variant="contained"
        color="error"
        type="submit"
        icon={<LogoutIcon />}
        text="Logout"
        onClick={() => {
          setIsLogged(false);
        }}
      />
        <LightDarkThemeButtonMUI />
    </Toolbar>
  );
}
