import React from "react";

import styles from "./Logo.module.css";

import Typography from "@mui/material/Typography";
import FourKIcon from "@mui/icons-material/FourK";

const Logo = () => {
  return (
    <Typography className={styles.logo}>
      <FourKIcon className={styles.icon} />
      Appvilla
    </Typography>
  );
};

export default Logo;
