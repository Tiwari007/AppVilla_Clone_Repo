import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./content/Home";
import Features from "./content/Features";
import Overview from "./content/Overview";
import Pricing from "./content/Pricing";
import PageNotFound from "./PageNotFound";
import Banner4 from "./content/Banner4";
import Banner5 from "./content/Banner5";
import {
  cardContent,
  pricingData,
  navlinks,
} from "../AppVilla_Data/AppVilla_Data";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUser(data);
    console.log(data);
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Layout id="layout" role="layout" navlinks={navlinks}>
        <Home role="home" />
        <Features cardContent={user} />
        {/* <Features cardContent={cardContent} /> */}
        <Overview />
        <Banner4 />
        <Banner5 />
        <Pricing pricingData={pricingData} />
      </Layout>

      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/features"
          element={
            <Features
              cardContent={user}
              onClick={function () {
                document.querySelector("#featuresId").scrollIntoView();
              }}
            />
          }
        />
        <Route path="/overview" element={<Overview />} />
        <Route
          path="/pricing"
          element={<Pricing pricingData={pricingData} />}
        />
        <Route path="/team" element={<Banner5 />} />
        <Route path="/blog" element={<Banner4 />} />
      </Routes>
    </>
  );
}

export default App;
