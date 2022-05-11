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
      className="flex justify-center items-center p-5"
    >
      <figure className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="Album" />
      </figure>
      <div className="flex-1">
        <h2 className="text-xl text-primary font-bold my-3">Appointment</h2>
        <h3 className="text-3xl text-white my-3">Make an appointment Today</h3>
        <p className="text-white my-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <ButtonPrimary> Get Started</ButtonPrimary>
      </div>
    </section>
  );
};

export default MakeAppointment;
