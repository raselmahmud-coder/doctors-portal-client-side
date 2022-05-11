import React from "react";
import quote from "../../../../assets/icons/quote.svg";
import Testimonial from "./Testimonial";
import people1 from "../../../../assets/images/people1.png";
import people2 from "../../../../assets/images/people2.png";
import people3 from "../../../../assets/images/people3.png";
const Testimonials = () => {
  return (
    <section className="lg:grid grid-rows-2 lg:my-24 my-8 p-5">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-primary text-xl">Testimonial</h3>
          <h1 className="text-accent text-2xl">What Our Patients Says</h1>
        </div>
        <figure>
          <img src={quote} alt="" className="lg:w-40 w-20" />
        </figure>
      </div>
      <section className="grid lg:grid-cols-3 sm:grid-cols-1">
        <Testimonial people={people1} />
        <Testimonial people={people2} />
        <Testimonial people={people3} />
      </section>
    </section>
  );
};

export default Testimonials;
