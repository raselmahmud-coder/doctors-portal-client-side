import React from "react";
import doctor from "../../../../assets/images/doctor.png";
import appointment from "../../../../assets/images/appointment.png";
import ButtonPrimary from "../../../Shared/BtnPrimary/ButtonPrimary";
const MakeAppointment = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <figure className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="Album" />
      </figure>
      <div className="flex-1">
        <h2 className="text-xl text-primary font-bold">
          New album is released!
        </h2>
        <h3 className="text-3xl text-white">
          Click the button to listen on Spotiwhy app.
        </h3>
        <p className="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          quasi?
        </p>
        <ButtonPrimary> Get Started</ButtonPrimary>
      </div>
    </section>
  );
};

export default MakeAppointment;
