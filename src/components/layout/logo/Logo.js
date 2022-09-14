import React from "react";

import styles from "./Logo.module.css";

import Typography from "@mui/material/Typography";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";

const Logo = () => {
  return (
    <>
      <LocalFireDepartmentSharpIcon className={styles.icon} />
      <Typography className={styles.logo}>Appvilla</Typography>
    </>
  );
};

export default Logo;
