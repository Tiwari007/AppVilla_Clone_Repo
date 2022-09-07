import React from "react";
import Box from "@mui/material/Box";
import ReusableCard from "../global/ReusableCard";


const Section2 = ({cardContent}) => {


  return (
    <Box sx={{ bgcolor: "#f9f9f9", height: "auto" }}>
        <Box sx={{display:"flex", flexDirection: "column"}}>
            <Box sx={{ textAlign: "center", marginTop: "150px", marginBottom: "150px", marginRight:"300px", marginLeft:"300px", fontWeight: "bold", color: "black"}}>
                <p sx={{color:"#ff6b81"}}>FEATURES</p>
                <h1 sx={{fontSize: "48px"}}>Your Experience Gets Better And Better Over Time.</h1>
                <p sx={{color:"#888888", marginBottom: "150px"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <Box sx={{display: "flex", flexDirection: "row"}}>
                    {
                        cardContent.map((card, id) => {
                            return (
                                <ReusableCard key={id} card={card} />
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>    
    </Box>
  );
};

export default Section2;
