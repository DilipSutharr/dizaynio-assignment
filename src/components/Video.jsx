import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Video = ({ src, onClick }) => {
  return (
    <div className="relative w-full h-full md:w-1/2 md:h-1/2 my-4">
      <video controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute right-5 top-5 p-2 cursor-pointer bg-blue-600 bg-opacity-40"
        onClick={onClick}
      >
        <RiDeleteBin6Line size="20px" color="red" />
      </div>
    </div>
  );
};

export default Video;
