import { use } from "framer-motion/m";
import React, { useState, useEffect } from "react";
import jeremy from "/Images/image-jeremy.png";
import { BiUser } from "react-icons/bi";
import data from "/src/data.json";
import { FaEllipsis } from "react-icons/fa6";

const Report = () => {
  const [isDaily, setIsDaily] = useState(true);
  const [isWeekly, setIsWeekly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false);
  const [timeframe, setTimeFrame] = useState("daily");

  const handleDaily = () => {
    setIsDaily(true);

    setIsWeekly(false);
    setIsMonthly(false);
    setTimeFrame("daily");
  };
  const handleWeekly = () => {
    setIsWeekly(true);

    setIsDaily(false);
    setIsMonthly(false);
    setTimeFrame("weekly");
  };
  const handleMonthly = () => {
    setIsMonthly(true);

    setIsDaily(false);
    setIsWeekly(false);
    setTimeFrame("monthly");
  };

  return (
    <section className="p-4 flex flex-col bg-blue-100 min-h-screen font-rubik">
      <div className=" bg-white rounded-2xl mb-6">
        <div className="bg-blue-500 flex items-center gap-6 px-6 py-4 rounded-2xl">
          <div className="text-6xl border border-4 border-blue-200 rounded-full p-1 text-blue-300 w-24">
            <img src={jeremy} />
          </div>
          <div className="flex flex-col gap-1 p">
            <p className="text-blue-300 font-bold">Report for</p>
            <p className="text-blue-100 font-bold text-2xl">John Doe</p>
          </div>
        </div>
        <div className="px-6 py-4 flex justify-between text-lg font-bold text-blue-300">
          <p
            onClick={handleDaily}
            className={`${isDaily ? "text-blue-700" : ""}`}
          >
            Daily
          </p>
          <p
            onClick={handleWeekly}
            className={`${isWeekly ? "text-blue-700" : ""}`}
          >
            Weekly
          </p>
          <p
            onClick={handleMonthly}
            className={`${isMonthly ? "text-blue-700" : ""}`}
          >
            Monthly
          </p>
        </div>
      </div>
      {data.map((item, index) => (
        <>
          <div
            key={index}
            className="bg-fit bg-no-repeat bg-right rounded-t-xl p-6"
            style={{
              backgroundColor: item.backgroundColor,
              backgroundImage: `url(${item.image})`,
            }}
          ></div>
          <div className="bg-white mb-6 mt-[-15px] flex items-center justify-between p-6 rounded-xl">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-bold">{item.title}</h1>
              <h1 className="text-2xl">
                {item.timeframes[timeframe].current}hrs
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="self-end">
                <FaEllipsis className="text-xl text-gray-500" />
              </div>
              <h1 className="text-gray-500  font-[500]">
                Last Week -{item.timeframes[timeframe].previous}hrs
              </h1>
            </div>
          </div>
        </>
      ))}
    </section>
  );
};
export default Report;
