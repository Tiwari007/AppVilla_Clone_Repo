import React from "react";

import styles from "./Styles/Banner5.module.css";
import Box from "@mui/material/Box";

const Banner5 = () => {
  return (
    <Box className={styles.section}>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "150px",
          marginBottom: "150px",
          marginRight: "300px",
          marginLeft: "300px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        <h1 className={styles.title}>
          Trusted by developers from over 80 planets
        </h1>
        <p className={styles.description}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority.
        </p>
        <Box className={styles.overview}>
            <div>
              <h3>
                <span>
                  100%
                </span>
              </h3>
              <p>satisfaction</p>
            </div>
            <div>
              <h3>
                <span>
                200k
                </span>
              </h3>
              <p>Happy Users</p>
            </div>
            <div>
              <h3>
                <span>
                200k+
                </span>
              </h3>
              <p>Downloads</p>
            </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner5;
