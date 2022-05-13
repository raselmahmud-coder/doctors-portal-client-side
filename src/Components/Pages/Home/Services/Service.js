import React from "react";

const Service = ({ service }) => {
  const { img, name } = service;
  return (
    <div className="card lg:w-96 shadow-xl my-3">
      <figure className="px-10 pt-10">
        <img src={img} alt="service" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Service;
