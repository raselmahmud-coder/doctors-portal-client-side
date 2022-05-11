import React from "react";
import Info from "./Info/Info";
import Banner from "./Banner";
import Services from "./Services/Services";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Testimonials from "./Testimonials/Testimonials";
import MailCollection from "./MailCollection/MailCollection";
import Footer from "../../Shared/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
      <MailCollection />
      <Footer />
    </>
  );
};

export default HomePage;
