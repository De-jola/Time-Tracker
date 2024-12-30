import React, { useState } from "react";
import { BiArrowToRight } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import SignUp from "./SignUp";

const Onboarding = () => {
  const totalSlides = 3;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displaySignUp, setDisplaySignUp] = useState(false);
  const slides = [<Slide1 />, <Slide2 />, <Slide3 />];

  const dots = Array(totalSlides).fill(0);
  const handleSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide < dots.length - 1) {
        return prevSlide + 1;
      }
      return prevSlide;
    });
  };

  const handleTrack = () => {
    setDisplaySignUp(!displaySignUp);
  };

  return (
    <main className="p-8 flex flex-col min-h-screen relative font-rubik">
      <div className="flex justify-between items-center ">
        <div className="flex item-center gap-1">
          {dots.map((item, index) => (
            <div
              className={`w-2 bg-blue-300 h-2 rounded-xl ${
                index === currentSlide ? "w-6" : ""
              }`}
              key={index}
            ></div>
          ))}
        </div>
        <div
          className="flex items-center gap-1 justify-end"
          onClick={handleTrack}
        >
          <p className="">
            <a href="#">Skip</a>
          </p>

          <BiArrowToRight />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-auto">
        <button
          className="w-full bg-blue-300 rounded-xl px-4 py-2 text-white text-lg "
          onClick={() => {
            if (currentSlide < dots.length - 1) {
              handleSlide();
            } else {
              handleTrack();
            }
          }}
        >
          {currentSlide === dots.length - 1 ? "Start Tracking Now" : "Continue"}
        </button>
      </div>

      {displaySignUp && (
        <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-70 z-10">
          <div className="absolute bottom-0">
            <SignUp />
          </div>
        </div>
      )}
    </main>
  );
};

export default Onboarding;
