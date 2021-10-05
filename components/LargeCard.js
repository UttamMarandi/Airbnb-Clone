import React from "react";
import Image from "next/dist/client/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="large_card relative py-16 cursor-pointer">
      <div className="img_container relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="text_container absolute top-32 left-12">
        <h3 className="text-white text-4xl mb-3 ">{title}</h3>
        <p className="text-white text-md mb-5 w-64 ">{description}</p>
        <button className=" text-md px-4 py-2 bg-gray-100 rounded-lg">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
