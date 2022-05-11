import React from "react";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import treatment from "../../../../assets/images/treatment.png";
import Service from "./Service";
import ButtonPrimary from "../../../Shared/BtnPrimary/ButtonPrimary";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description: "",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "",
      img: whitening,
    },
  ];
  return (
    <div className="my-24">
      <div className="text-center">
        <h1 className="text-2xl uppercase text-bold text-primary">
          Our Services
        </h1>
        <h1 className="text-3xl uppercase text-bold text-accent">
          Services We Provide
        </h1>
      </div>
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 my-24">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </section>
      <section className="lg:my-44 sm:my-5">
        <div className="card lg:card-side lg:px-40 lg:mt-7">
          <figure>
            <img className="w-96 h-full rounded" src={treatment} alt="Album" />
          </figure>
          <div className="card-body lg:ml-7">
            <h2 className="card-title lg:text-5xl sm:text-2xl">
              Exceptional Dental Care, on Your Terms
            </h2>
            <p className="lg:text-base sm:text-xs">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <div className="card-actions justify-start">
              <ButtonPrimary>Get Started</ButtonPrimary>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
