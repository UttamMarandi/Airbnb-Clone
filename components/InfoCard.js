import React from "react";
import Image from "next/dist/client/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = ({
  img,
  location,
  description,
  title,
  star,
  price,
  total,
}) => {
  return (
    <div className="info_card">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div>
        <div>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
