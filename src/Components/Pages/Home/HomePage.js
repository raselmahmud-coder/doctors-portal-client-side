import React from "react";
import Info from "./Info/Info";
import Banner from "./Banner";
import Services from "./Services/Services";

const HomePage = () => {
  return (
    <div className="lg:px-10 sm:px-5">
          <Banner />
          <Info />
          <Services/>
    </div>
  );
};

export default HomePage;
