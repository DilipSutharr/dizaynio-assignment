import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Image = ({ src, alt, onClick }) => {
  return (
    <div className="relative w-full h-full md:w-1/2 md:h-1/2 my-4">
      <img src={src} alt={alt} />
      <div
        className="absolute right-5 top-5 p-2 cursor-pointer bg-blue-600 bg-opacity-40"
        onClick={onClick}
      >
        <RiDeleteBin6Line size="20px" color="red" />
      </div>
    </div>
  );
};

export default Image;
