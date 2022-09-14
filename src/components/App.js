import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./content/Home";
import Features from "./content/Features";
import Overview from "./content/Overview";
import Pricing from "./content/Pricing";
import PageNotFound from "./PageNotFound";
import Banner4 from "./content/Banner4";
import Banner5 from "./content/Banner5";


function App() {

  const cardContent = [
    {
      icon: "https://img.icons8.com/color/344/pinguin.png",
      title: "Simple Queues",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
    },
    {
      icon: "https://img.icons8.com/color/344/pinguin.png",
      title: "Simple Queues",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
    },
    {
      icon: "https://img.icons8.com/color/344/pinguin.png",
      title: "Simple Queues",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
    },
    {
      icon: "https://img.icons8.com/color/344/pinguin.png",
      title: "Simple Queues",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
    },
    {
      icon: "https://img.icons8.com/color/344/pinguin.png",
      title: "Simple Queues",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
    },
    {
      icon: "https://img.icons8.com/color/344/pinguin.png",
      title: "Simple Queues",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
    },
  ];

  const pricingData = [
    {
      title: "Hobby",
      details: "All the basics for starting a new business",
      price: "$12",
      buttonText: "Buy Hobby",
      includeInCourse: [
        "Cras justo odio.",
        "Dapibus ac facilisis in.",
        "Morbi leo risus.",
        "Potenti felis, in cras ligula.",
      ],
    },
    {
      title: "Hobby",
      details: "All the basics for starting a new business",
      price: "$12",
      buttonText: "Buy Hobby",
      includeInCourse: [
        "Cras justo odio.",
        "Dapibus ac facilisis in.",
        "Morbi leo risus.",
        "Potenti felis, in cras ligula.",
      ],
    },
    {
      title: "Hobby",
      details: "All the basics for starting a new business",
      price: "$12",
      buttonText: "Buy Hobby",
      includeInCourse: [
        "Cras justo odio.",
        "Dapibus ac facilisis in.",
        "Morbi leo risus.",
        "Potenti felis, in cras ligula.",
      ],
    },
    {
      title: "Hobby",
      details: "All the basics for starting a new business",
      price: "$12",
      buttonText: "Buy Hobby",
      includeInCourse: [
        "Cras justo odio.",
        "Dapibus ac facilisis in.",
        "Morbi leo risus.",
        "Potenti felis, in cras ligula.",
      ],
    },
  ];

  const navlinks = [
    "Home",
    "Features",
    "Overview",
    "Pricing",
    "Team",
    "Blog",
    "Contact",
  ];

  return (
    <>
        <Layout id="layout" role="layout" navlinks={navlinks}>
          <Home role="home" />
          <Features cardContent={cardContent} />
          <Overview />
          <Banner4 />
          <Banner5 />
          <Pricing pricingData={pricingData} />
        </Layout>

        <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features cardContent={cardContent} onClick={function(){
                  document.querySelector("#featuresId").scrollIntoView();
                  }
              }/>} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/pricing" element={<Pricing pricingData={pricingData}/>} />
        <Route path="/team" element={<Banner5 />} />
        <Route path="/blog" element={<Banner4 />} />
      </Routes>
    </>
  );
}

export default App;
