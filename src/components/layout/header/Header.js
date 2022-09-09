import * as React from "react";
import PropTypes from "prop-types";

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

Header.defaultProps = {
  navlinks: ["Home", "Features", "Overview", "Pricing", "Team"],
};

Header.propTypes = {
  navlinks: PropTypes.array.isRequired,
};
