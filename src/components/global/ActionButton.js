import React from "react";
import PropTypes from "prop-types";

import styles from './ActionButton.module.css'
import { Button } from "@mui/material";


function ActionButton({ color, type, text, variant, icon, onClick }) {
  return (
      <Button className={styles.button} variant={variant} color={color} type={type} onClick={onClick}>
        {icon} {text}
      </Button>
  );
}

ActionButton.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.node
};

export default ActionButton;
