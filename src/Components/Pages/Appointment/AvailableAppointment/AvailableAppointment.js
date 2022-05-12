import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Booking from "../Booking/Booking";
import BookingModal from "../Booking/BookingModal";

const AvailableAppointment = ({ selected }) => {
  const [Bookings, setBookings] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch(`fakeService.json`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <>
      <h1 className="text-secondary text-1xl text-center my-5">
        Available Appointments on {selected ? format(selected, "PP") : ""}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-9">
        {Bookings.map((booking) => (
          <Booking
            key={booking._id}
            booking={booking}
            setTreatment={setTreatment}
          />
        ))}
        {treatment && (
          <BookingModal
            selected={selected}
            setTreatment={setTreatment}
            treatment={treatment}
          />
        )}
      </div>
    </>
  );
};

export default AvailableAppointment;
