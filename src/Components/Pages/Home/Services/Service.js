import React from "react";

const Service = ({ service }) => {
  const { img, name } = service;
  return (
    <div class="card lg:w-96 bg-base-100 shadow-xl my-3">
      <figure class="px-10 pt-10">
        <img src={img} alt="service" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Service;
