import React from "react";
import chair from "../../../../assets/images/chair.png";
import bg from "../../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppointmentHero = ({ selected, setSelected }) => {
  return (
    <>
      <div
        className="hero min-h-screen bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl lg:ml-6"
            alt="dentist chair"
          />
          <div className="lg:mr-6">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentHero;
