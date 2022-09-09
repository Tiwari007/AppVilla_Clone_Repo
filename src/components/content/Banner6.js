import React from "react";

import styles from "./Banner6.module.css";
import Box from "@mui/material/Box";
import PricingCardList from "../global/PricingCardList";

const Banner6 = ({ pricingData }) => {
  const pricingPlanDataHandler = (() => {
    return pricingData.map((data, id) => {

      return <PricingCardList key ={id} data={data} />;
    });
  })()

  return (
    <Box className={styles.section}>
      <Box className={styles.container}>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "150px",
            marginBottom: "150px",
            marginRight: "300px",
            marginLeft: "300px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          <p className={styles.heading}>PRICING</p>
          <h1 className={styles.title}>Pricing Plan</h1>
          <p className={styles.description}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <Box className={styles.card}>{pricingPlanDataHandler}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner6;
