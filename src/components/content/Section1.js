import React from "react";
import Box from "@mui/material/Box";
import ReusableButton from "../global/ReusableButton";
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';

const Section1 = () => {


  return (
    <Box sx={{ bgcolor: "#ff6b81", height: "auto", paddingTop:"100px" }}>
        <Box sx={{flexDirection: 'row', display:"flex"}}>
            <Box sx={{width: "40%", textAlign: "center", marginTop: "150px", paddingLeft: "100px", fontWeight: "bold", color: "white"}}>
                <h1 sx={{fontSize: "48px"}}>A Powerful App For Your Business.</h1>
                <p>From open source to pro services, Piqes helps you to build, deploy, test, and monitor apps.</p>
                <ReusableButton variant="contained" color="primary" type="submit" text="App Store" icon={<AppleIcon />} />
                <ReusableButton variant="outlined" color="primary" type="submit" text="Google Play" icon={<ShopIcon />} />
            </Box>
            <Box sx={{width: "40%", marginRight: "300px"}}>
                <img src="https://preview.uideck.com/items/appvilla/assets/images/hero/phone.png" alt="penguin" />
            </Box>
        </Box>    
    </Box>
  );
};

export default Section1;
