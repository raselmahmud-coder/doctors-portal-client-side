import React, { useState } from "react";
import { format } from "date-fns";
import Booking from "../Booking/Booking";
import BookingModal from "../Booking/BookingModal";
import { useQuery } from "react-query";
import { SpinnerCircular } from "spinners-react";
import { toast } from "react-toastify";

const AvailableAppointment = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(selected, "PP");
  const {
    data: bookings,
    isLoading,
    error,
    refetch
  } = useQuery(["available", formattedDate], () =>
    fetch(`https://doctors-portal-rm.herokuapp.com/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return (
      <>
        <SpinnerCircular
          speed={120}
          color={"#0FCFEC"}
          style={{ margin: "0px auto", display: "block" }}
        />
      </>
    );
  }
  if (error) {
    toast.error(`error happen ${error}`)
  }

  return (
    <>
      <h1 className="text-secondary text-1xl text-center my-5">
        Available Appointments on {selected ? format(selected, "PP") : ""}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-9">
        {bookings?.map((booking) => (
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
            refetch={refetch}
          />
        )}
      </div>
    </>
  );
};

export default AvailableAppointment;
