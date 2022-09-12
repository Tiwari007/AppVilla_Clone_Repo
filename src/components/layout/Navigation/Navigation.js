import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";

const Navigation = ({ navlinks }) => {
  const NavBar = (() =>
    navlinks.map((page, id) => (
      <MenuItem key={id}>
        <NavLink style={{textDecoration: "none"}} to={page.toLowerCase() == 'home' ? "/" : page.toLowerCase()}>{page}</NavLink> 
      </MenuItem>
    )))();

  return <>{NavBar}</>;
};

export default Navigation;

Navigation.defaultProps = {
  navlinks: ["Home", "Features", "Overview", "Pricing", "Team"],
};

Navigation.propTypes = {
  navlinks: PropTypes.array.isRequired,
};
