import React from "react";

import styles from './Styles/Home.module.css'
import Box from "@mui/material/Box";
import ActionButton from "../global/ActionButton";
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';

const Home = () => {

// BANNer
  return (
    <Box className={styles.section}>
        <Box className={styles.container}>
            <Box className={styles.leftSide}>
                <h1 sx={{fontSize: "48px"}}>A Powerful App For Your Business.</h1>
                <p>From open source to pro services, Piqes helps you to build, deploy, test, and monitor apps.</p>
                <ActionButton variant="contained" color="primary" type="submit" text="App Store" icon={<AppleIcon />} />
                <ActionButton variant="outlined" color="primary" type="submit" text="Google Play" icon={<ShopIcon />} />
            </Box>
            <Box className={styles.rightSide}>
                <img src="https://preview.uideck.com/items/appvilla/assets/images/hero/phone.png" alt="phone" />
            </Box>
        </Box>    
    </Box>
  );
};

export default Home;
