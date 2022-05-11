import React from "react";

const Testimonial = ({people}) => {
  return (
   
      <div className="bg-base-100 shadow-xl p-5 rounded-lg m-8">
        <p>
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
        <div className="flex items-center mt-5">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={people}
                alt="..."
              />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl text-bold">Winson Herry</h3>
            <h4>California</h4>
          </div>
        </div>
      </div>
  );
};

export default Testimonial;
