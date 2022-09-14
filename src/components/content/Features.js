import React, { useContext } from "react";

import PropTypes from 'prop-types';

import { AppVillaContext } from "../../contexts/theme";

import styles from "./Styles/Features.module.css";
import Box from "@mui/material/Box";
import CardList from "../global/CardList";

const Features = ({ cardContent }) => {

  const { theme } = useContext(AppVillaContext);
  return (
    <Box id="featuresId" className={theme === "light" ? styles.section_light : styles.section_dark}>
      <Box className={styles.container}>
        <Box className={styles.pricingDetails}>
          <p className={styles.heading}>FEATURES</p>
          <h1 className={styles.title}>
            Your Experience Gets Better And Better Over Time.
          </h1>
          <p className={styles.description}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </Box>
        <Box className={styles.outerCard}>
          {/* Create a method or create a new component */}
          {cardContent.map((card, id) => {
            return (
              <Box className={styles.card}>
                <CardList key={id} card={card} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Features;


Features.propTypes = {
  cardContent : PropTypes.object
}

