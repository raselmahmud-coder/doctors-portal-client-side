import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const BookingModal = ({ treatment, selected, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(selected, "PP");
  const handleBookingForm = (e) => {
    e.preventDefault();
    // const time = e.target.time.value;
    const slot = e.target.select.value;
    // const name = e.target.name.value;
    const phone = e.target.phone.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: phone,
    };
    fetch(`https://doctors-portal-rm.herokuapp.com/booking`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`you have booked ${slot}`);
        } else {
          toast.error(`You have booked already this treatment`);
        }
        refetch();
        setTreatment(null);
        console.log(data);
      });
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
                    text-baseselect
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
                  defaultValue={"DEFAULT"}
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
                  <option value={"defaultValue"} readOnly>
                    Select Time
                  </option>
                  {slots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
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
                  value={user?.displayName || "Display Name Empty"}
                  disabled
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
                  value={user?.email}
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
                  disabled
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
