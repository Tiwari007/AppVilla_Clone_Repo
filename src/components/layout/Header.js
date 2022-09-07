import * as React from "react";
import PropTypes from "prop-types";

import "./Header.css";

import Toolbar from "@mui/material/Toolbar";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ReusableButton from "../global/ReusableButton";

export default function Header({ navlinks }) {
  return (
      <Toolbar className="toolbar" style={{backgroundColor: "#ff6b81", height: "100px", width:"100%", position:"fixed", color: "white", fontWeight:"bold"}}>
        <Logo />
        <Navigation navlinks={navlinks} />
        <ReusableButton variant="contained" color="primary" type="submit" text="Get It Now"/>         
      </Toolbar>
  );
}

Header.defaultProps = {
    navlinks: ["Home", "Features", "Overview", "Pricing", "Team"],
};

Header.propTypes = {
    navlinks: PropTypes.array.isRequired,
};
