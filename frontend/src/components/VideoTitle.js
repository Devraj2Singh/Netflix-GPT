import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] md:px-24 px-6 absolute text-white bg-gradient-to-r from-black">
      
      {/* Title */}
      <h1 className="text-2xl md:text-6xl font-bold max-w-2xl">
        {title}
      </h1>

      {/* Description */}
      <p
        className="
          hidden md:block
          pt-4 text-lg text-gray-200 drop-shadow-lg
          max-w-xl
          line-clamp-4
        "
      >
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-6">

        <button className="flex items-center gap-2 bg-white text-black font-bold py-2 px-6 md:py-3 md:px-8 text-lg rounded-md shadow-xl hover:bg-gray-200 transition">
          <FaPlay size={18} />
          Play
        </button>

        <button className="hidden md:flex items-center gap-2 bg-gray-700 bg-opacity-60 text-white font-semibold py-2 px-6 text-lg rounded-md hover:bg-opacity-80 transition">
          <AiOutlineInfoCircle size={22} />
          More Info
        </button>

      </div>
    </div>
  );
};

export default VideoTitle;
