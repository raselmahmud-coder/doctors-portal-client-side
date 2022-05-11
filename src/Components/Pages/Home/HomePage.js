import React from "react";
import Info from "./Info/Info";
import Banner from "./Banner";
import Services from "./Services/Services";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Testimonials from "./Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div className="lg:px-10 sm:px-5">
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
    </div>
  );
};

export default HomePage;
