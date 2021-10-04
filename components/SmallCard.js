import React from "react";
import Image from "next/dist/client/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="small_card flex items-center m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="left relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div className="right">
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
