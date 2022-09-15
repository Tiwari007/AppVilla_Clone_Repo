import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./content/Home";
import Features from "./content/Features";
import Overview from "./content/Overview";
import Pricing from "./content/Pricing";
import PageNotFound from "./content/PageNotFound";
import OverviewContent from "./content/OverviewContent";
import Statistics from "./content/Statistics";
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
        <OverviewContent />
        <Statistics />
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
        <Route path="/team" element={<Statistics />} />
        <Route path="/blog" element={<OverviewContent />} />
      </Routes>
    </>
  );
}

export default App;
