import React from "react";

import styles from './Styles/Banner4.module.css'
import Box from "@mui/material/Box";
import ActionButton from "../global/ActionButton";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const Banner4 = () => {

// BANNer
  return (
    <Box className={styles.section}>
        <Box className={styles.container}>
            <Box className={styles.rightSide}>
                <img src="https://preview.uideck.com/items/appvilla/assets/images/app-ss/app-ss1.png" alt="penguin" />
            </Box>
            <Box className={styles.leftSide}>
                <ActionButton variant="contained" color="primary" type="submit" icon={<CloudDownloadIcon />} />
                <h1 sx={{fontSize: "48px", color:"black"}}>1,25,000 Customers Using The Application!</h1>
                <p>Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow page speeds drive our innovative platform empowers anyone to convert clicks ou'll publish your first landing page in minutes.</p>
                <ActionButton variant="contained" color="primary" type="submit" text="Get Sterted" />  
            </Box>
        </Box>    
    </Box>
  );
};

export default Banner4;
