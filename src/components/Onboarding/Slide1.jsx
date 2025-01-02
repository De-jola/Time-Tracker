import React from "react";
import slide1Img from "/Images/slide-2.webp";

const Slide1 = () => {
  return (
    <div className="py-8 text-center flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-blue-400">
        Take Control of Your Time
      </h1>
      <p className="text-lg">
        Track your time, boost your productivity, and achieve your goals
        effortlessly
      </p>
      <img src={slide1Img} loading="lazy" />
    </div>
  );
};

export default Slide1;
