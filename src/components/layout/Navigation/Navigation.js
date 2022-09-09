import React from "react";
import PropTypes from "prop-types";

import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

const Navigation = ({ navlinks }) => {
  const NavBar = (() =>
    navlinks.map((page, id) => (
      <MenuItem key={id}>
        <Typography>{page}</Typography>
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
