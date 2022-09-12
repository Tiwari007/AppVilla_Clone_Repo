import * as React from "react";

import styles from "./Header.module.css";

import Toolbar from "@mui/material/Toolbar";

import Logo from "../logo/Logo";
import Navigation from "../Navigation/Navigation";
import ActionButton from "../../global/ActionButton";

export default function Header({ navlinks }) {
  return (
    <Toolbar className={styles.toolbar}>
      <Logo />
      <Navigation navlinks={navlinks} />
      <ActionButton
        variant="contained"
        color="primary"
        type="submit"
        text="Get It Now"
      />
    </Toolbar>
  );
}
