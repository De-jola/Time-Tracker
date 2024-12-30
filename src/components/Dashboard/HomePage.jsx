import React, { useState, useEffect } from "react";
import { BiArrowFromLeft, BiUser } from "react-icons/bi";

const HomePage = () => {
  const [seconds, setSeconds] = useState(0); // Timer value
  const [isActive, setIsActive] = useState(false); // Track if the timer is running

  // Start the timer when 'isActive' is true
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    // Cleanup interval
    return () => clearInterval(interval);
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive((prev) => !prev); // Toggle timer on button click
  };

  const handleReset = () => {
    setIsActive(false); // Stop the timer
    setSeconds(0); // Reset the timer
  };

  const formatTime = () => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <section id="homepage" className="p-4 flex flex-col min-h-screen">
        <nav className="flex items-center justify-between">
          <div className="text-4xl">
            <BiArrowFromLeft />
          </div>
          <div className="bg-blue-300 p-2 rounded-full cursor-pointer text-2xl">
            <BiUser />
          </div>
        </nav>

        <div className="bg-blue-500 flex flex-col items-center justify-center m-auto px-24 py-24 rounded-full">
          <h1 className="text-3xl font-bold text-white">
            {isActive ? "Tracking" : "Track"}
          </h1>
          <p className="text-white text-xl mt-4 font-mono">{formatTime()}</p>
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleStartStop}
              className={`px-4 py-2 rounded-lg text-white ${
                isActive
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isActive ? "Stop" : "Start"}
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-lg text-white"
            >
              Reset
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
