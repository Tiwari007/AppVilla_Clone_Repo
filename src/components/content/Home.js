import React, { useContext } from "react";

import { AppVillaContext } from "../../contexts/theme";

import styles from "./Styles/Home.module.css";
import Box from "@mui/material/Box";
import ActionButton from "../global/ActionButton";
import ShopIcon from "@mui/icons-material/Shop";
import AppleIcon from "@mui/icons-material/Apple";

const Home = () => {
  const { theme } = useContext(AppVillaContext);

  return (
    <Box
      className={theme === "light" ? styles.section_light : styles.section_dark}
    >
      <Box className={styles.container}>
        <Box className={styles.leftSide}>
          <h1 className={styles.heading}>A Powerful App For Your Business.</h1>
          <p>
            From open source to pro services, Piqes helps you to build, deploy,
            test, and monitor apps.
          </p>
          <Box className={styles.button}>
            <ActionButton
              variant="contained"
              color="secondary"
              type="submit"
              text="App Store"
              icon={<AppleIcon />}
            />
            <ActionButton
              variant="outlined"
              color="secondary"
              type="submit"
              text="Google Play"
              icon={<ShopIcon />}
            />
          </Box>
        </Box>
        <Box className={styles.rightSide}>
          <img
            src="https://preview.uideck.com/items/appvilla/assets/images/hero/phone.png"
            alt="phone"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
