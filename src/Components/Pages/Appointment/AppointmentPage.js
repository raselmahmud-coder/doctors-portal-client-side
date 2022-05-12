import React from "react";
import Footer from "../../Shared/Footer/Footer";
import AppointmentHero from "./AppHero/AppointmentHero";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selected, setSelected] = React.useState(new Date());
  return (
    <>
      <AppointmentHero selected={selected} setSelected={setSelected} />
      <AvailableAppointment selected={selected}/>
      <Footer />
    </>
  );
};

export default Appointment;
