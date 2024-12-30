import React from "react";
import slide2Img from "/Images/Slide 1.jpg";

const Slide2 = () => {
  return (
    <div className="py-6 text-center flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-blue-400">
        Powerful Features at Your Fingertips
      </h1>
      <p className="text-lg">Manage your time like a pro with these tools.</p>
      <img src={slide2Img} loading="lazy" />
    </div>
  );
};

export default Slide2;
