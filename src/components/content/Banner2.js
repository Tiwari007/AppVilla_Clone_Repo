import React from "react";

import styles from './Banner2.module.css'
import Box from "@mui/material/Box";
import CardList from "../global/CardList";


const Banner2 = ({cardContent}) => {


  return (
    <Box className={styles.section}>
        <Box className={styles.container}>
            <Box sx={{ textAlign: "center", marginTop: "150px", marginBottom: "150px", marginRight:"300px", marginLeft:"300px", fontWeight: "bold", color: "black"}}>
                <p className={styles.heading}>FEATURES</p>
                <h1 className={styles.title}>Your Experience Gets Better And Better Over Time.</h1>
                <p className={styles.description}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <Box className={styles.card}>

                    {/* Create a method or create a new component */}
                    {
                        cardContent.map((card, id) => {
                            return (
                                <CardList key={id} card={card} />
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>    
    </Box>
  );
};

export default Banner2;
