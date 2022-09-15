import React from "react";

// import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";

const Layout = (props) => {
  return (
    <>
      <Header navlinks={props.navlinks} />
      {props.children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
