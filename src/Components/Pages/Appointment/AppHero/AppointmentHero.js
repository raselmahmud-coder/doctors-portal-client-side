import React from "react";
import chair from "../../../../assets/images/chair.png";
import bg from "../../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
const AppointmentHero = () => {
  const [selected, setSelected] = React.useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <>
      <div
        class="hero min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            class="max-w-sm rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentHero;
