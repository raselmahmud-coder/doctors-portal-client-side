import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckOutForm = ({ appointment }) => {
  const price = appointment?.price;
  const stripe = useStripe();
  const elements = useElements();
  //   console.log("price from check out", price);
  // const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    console.log("price", price);
    if (price) {
      fetch(`http://localhost:5000/create-payment-intent`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => console.log("hello data from check out", data));
    }
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(`${error?.message}`, {
        toastId: "strip-error",
      });
    } else {
      toast.success(`Your Method is ${paymentMethod?.type}`);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "red",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "red",
            },
          },
        }}
      ></CardElement>
      <button
        type="submit"
        disabled={!stripe}
        className="bg-primary p-2 rounded"
      >
        Pay
      </button>
    </form>
  );
};

export default CheckOutForm;
