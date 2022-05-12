import React from "react";

const Booking = ({ booking, setTreatment }) => {
  const { name, slots } = booking;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]} </span>
            ) : (
              <span className="text-red-500">Try another day </span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
          </p>
          <div className="card-actions justify-center">
            <label
              onClick={() => setTreatment(booking)}
              htmlFor="booking-modal"
              disabled={slots.length === 0}
              className="btn text-white bg-gradient-to-r from-secondary to-primary border-none"
            >
              BOOK APPOINTMENT
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
