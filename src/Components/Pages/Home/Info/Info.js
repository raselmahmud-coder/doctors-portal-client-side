import React from "react";
import InfoCard from "./InfoCard";
import clockIcon from "../../../../assets/icons/clock.svg";
import markerIcon from "../../../../assets/icons/marker.svg"
import phoneIcon from "../../../../assets/icons/phone.svg"

const Info = () => {
    
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 gap-3 lg:px-10 px-5">
        <InfoCard title="Opening Hours" icon={clockIcon} bgClass ="bg-gradient-to-r from-secondary to-primary"/>
        <InfoCard title="Visit Our Location" icon={markerIcon} bgClass="bg-accent"/>
        <InfoCard title="Contact Us Now" icon={phoneIcon} bgClass ="bg-gradient-to-r from-secondary to-primary" />
      </div>
    </>
  );
};

export default Info;
