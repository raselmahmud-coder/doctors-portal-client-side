import React from "react";
import appointment from "../../../../assets/images/appointment.png";
import ButtonPrimary from "../../../Shared/BtnPrimary/ButtonPrimary";
const MailCollection = () => {
  return (
    <section className="my-24">
      <div
        className="flex justify-center"
        style={{
          backgroundImage: `url(${appointment})`,
          backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-6 rounded-lg">
          <h1 className="text-primary text-center my-1">Contact Us</h1>
          <h1 className="text-white text-center text-2xl pb-7">
            Stay Connected With Us
          </h1>
          <form>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                placeholder="Email address"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Subject"
              />
            </div>

            <div className="form-group mb-6">
              <textarea
                className="
        form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <ButtonPrimary>Submit</ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MailCollection;
