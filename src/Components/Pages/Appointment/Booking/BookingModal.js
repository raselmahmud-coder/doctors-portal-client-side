import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selected, setTreatment }) => {
  const { name, slots } = treatment;
  const handleBookingForm = (e) => {
    e.preventDefault();
    const time = e.target.time.value;
    const select = e.target.select.value;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    console.log(time, select, name, phone, email);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-5 top-5"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-accent">Booking for: {name}</h3>
          <div className="p-6 rounded-lg shadow-lg">
            <form onSubmit={handleBookingForm}>
              <div className="mb-6">
                <input
                  value={format(selected, "PP")}
                  readOnly
                  type="text"
                  className="
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    bg-gray-200
                    outline-none
                    rounded-md
                    "
                  name="time"
                />
              </div>
              <div className="mb-6">
                <select
                  className=" 
                w-full 
                px-3
                py-1.5
                text-base
                font-normal
                bg-gray-200
                rounded-md
                cursor-pointer
                "
                  name="select"
                >
                  <option disabled selected>
                    Select
                  </option>
                  {slots.map((slot) => (
                    <option value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  className="
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 
                    focus:bg-white 
                    focus:border-blue-600 
                    focus:outline-none"
                  placeholder="Full Name"
                  name="name"
                />
              </div>
              <div className="mb-6">
                <input
                  type={"number"}
                  className="
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 
                    focus:bg-white 
                    focus:border-blue-600 
                    focus:outline-none"
                  placeholder="Phone Number"
                  name="phone"
                />
              </div>
              <div className="mb-6">
                <input
                  name="email"
                  type="email"
                  className="
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white 
                    bg-clip-padding
                    border border-solid 
                    border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <button
                type="submit"
                className="
                px-6
                py-2.5
                bg-accent
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                w-full
                shadow-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
