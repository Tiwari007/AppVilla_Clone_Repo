import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

function ReusableButton({ color, type, text, variant, icon }) {
  return (
      <Button sx ={{marginRight: "20px"}} variant={variant} color={color} type={type}>
        {icon} {text}
      </Button>
  );
}

ReusableButton.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.node
};

export default ReusableButton;
