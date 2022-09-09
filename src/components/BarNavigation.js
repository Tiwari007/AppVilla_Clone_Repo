import * as React from "react";

// import styles from "./BarNavigation.module.css";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FourKIcon from "@mui/icons-material/FourK";
import MenuItem from "@mui/material/MenuItem";

export default function BarNavigation() {
  const navlinks = [
    "Home",
    "Features",
    "Overview",
    "Pricing",
    "Team",
    "Blog",
    "Contact",
  ];

  return (
    <Toolbar >
      <Typography >
        <FourKIcon  />
        Appvilla
      </Typography>
      {navlinks.map((page, id) => (
        <MenuItem key={id}>
          <Typography>{page}</Typography>
        </MenuItem>
      ))}
    </Toolbar>
  );
}
