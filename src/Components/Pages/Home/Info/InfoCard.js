import React from "react";

const InfoCard = ({ title, icon, bgClass }) => {
  return (
    <>
      <div className={`card lg:card-side text-white shadow-xl ${bgClass}`}>
        <figure>
          <img src={icon} alt="Album" className="pt-5 lg:pl-6" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Click the button to listen on Spoty why app.</p>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
