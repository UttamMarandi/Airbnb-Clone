import React from "react";
import Image from "next/dist/client/image";

const Banner = () => {
  return (
    <div className="banner relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px]">
      <Image
        className=""
        src="https://dev-sachitstudio.pantheonsite.io/wp-content/uploads/2021/10/airbnb_banner_long-1.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-semibold">
          Not sure where to go? Perfect
        </p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
