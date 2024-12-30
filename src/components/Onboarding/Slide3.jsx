import React from "react";
import slide3Img from "/Images/slide 3.jpg";

const Slide3 = () => {
  return (
    <div className="py-8 text-center flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-blue-400">
        Ready to Master Your Time?
      </h1>
      <p className="text-lg">Let’s set you up in seconds!</p>
      <img src={slide3Img} />
    </div>
  );
};

export default Slide3;
