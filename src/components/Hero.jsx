import React, { useState } from "react";
import { GROUP_TYPE } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [group, setGroup] = useState("");

  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="relative w-screen min-h-screen bg-[#0B0809] bg-gradient-to-tr from-black via-gray-900 to-blue-900 px-4">
      {/* Heading */}
      <div className="py-12 text-white text-center flex flex-col gap-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
          Take the Pilot Seat of Your Next Adventure
        </h1>
        <p className="text-lg sm:text-2xl opacity-70 font-light">
          Let's create your personalized travel experience
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-6 text-white pb-20">
        {/* Destination */}
        <div>
          <label htmlFor="destination" className="block mb-2 font-medium">
            Where would you like to go?
          </label>
          <input
            id="destination"
            type="text"
            placeholder="⚲ Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-4 bg-[#333333] text-white rounded-lg focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="duration" className="block mb-2 font-medium">
            How long will you stay?
          </label>
          <input
            id="duration"
            type="text"
            placeholder="🗓️ Select Duration (no. of days)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-4 bg-[#333333] text-white rounded-lg focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        {/* Group Type */}
        <div>
          <label className="block mb-2 font-medium">
            Who are you travelling with?
          </label>
          <div className="flex flex-wrap   gap-4  w-full">
            {GROUP_TYPE.map((g) => (
              <div
                key={g.name}
                onClick={() => setGroup(g.name)}
                className={`flex items-center mx-auto justify-center gap-2 w-[48%] sm:w-[48%] p-3 rounded-md cursor-pointer transition-all
                  ${
                    group === g.name
                      ? "bg-blue-600 text-white"
                      : "bg-[#333333] hover:bg-blue-900 hover:text-slate-300"
                  }`}
              >
                <img src={g.icon} alt={g.name} className="w-6 h-6" />
                <span>{g.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={navigateToDashboard}
          className="bg-[#3643FB] text-white font-bold py-4 rounded-lg w-full sm:w-8/12 mx-auto"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Hero;
