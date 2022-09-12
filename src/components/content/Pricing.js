import React from "react";

import styles from "./Styles/Pricing.module.css";
import Box from "@mui/material/Box";
import PricingCardList from "../global/PricingCardList";

const Pricing = ({ pricingData }) => {
  const pricingPlanDataHandler = (() => {
    return pricingData.map((data, id) => {

      return <PricingCardList key ={id} data={data} />;
    });
  })()

  return (
    <Box className={styles.section}>
      <Box className={styles.container}>
        <Box className={styles.pricingDetails}>
          <p className={styles.heading}>PRICING</p>
          <h1 className={styles.title}>Pricing Plan</h1>
          <p className={styles.description}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          </Box>
          <Box className={styles.card}>{pricingPlanDataHandler}</Box>
      </Box>
    </Box>
  );
};

export default Pricing;
