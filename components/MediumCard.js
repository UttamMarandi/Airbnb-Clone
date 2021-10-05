import React from "react";
import Image from "next/dist/client/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="medium_card cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="font-semibold ">{title}</h3>
    </div>
  );
};

export default MediumCard;
