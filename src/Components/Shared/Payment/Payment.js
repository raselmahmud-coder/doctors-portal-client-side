import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(
  "pk_test_51HOOgiJm9OErWZzlBMPnc8mHUiPluKuNyCZ6rbwwamXwxr5IjyBYPU2hsRqGyT6FCSj9LannpoMNdPG0jCqZZlk500JetbUqld"
);

const Payment = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/booking/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [id]);
  return (
    <div className="grid lg:grid-cols-2 my-20">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Pay for {appointment?.treatment}</h2>
          <p>
            Your appointment on
            <span className="text-purple-500">
              {" "}
              {appointment?.date}{" "}
            </span> at {appointment?.slot}
          </p>
          <p>Payment : $ {appointment?.price}</p>
        </div>
      </div>
      <div className="card shadow-xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckOutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
