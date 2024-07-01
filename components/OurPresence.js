import Image from "next/image";
import React from "react";

// /homePage/upfrontLogo.svg

const OurPresence = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-1/2 relative">
        <div className="group relative">
          <Image
            src="/homePage/map.png"
            width={600}
            height={600}
            className="w-full hidden lg:block"
            alt="map"
          />
          <Image
            src="/homePage/map_mobile.png"
            width={600}
            height={600}
            className="w-full lg:hidden block"
            alt="map"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center cursor-pointer justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              className="w-64 lg:w-4/5"
              src="/homePage/indiaMap.png"
              width={500}
              height={500}
              alt="India"
            />
          </div> */}
        </div>
      </div>

      <div className="lg:w-1/2 bg-red-600 flex flex-col justify-center items-center py-10">
        <div className="lg:w-3/5 space-y-4 lg:p-0 p-5 ">
          <h2 className="lg:text-6xl text-3xl text-white">
            OUR <br /> PRESENCE
          </h2>
          <p className="text-red-200 text-xl">
            We are based out of India and have worked across <b>17 states</b>{" "}
            and <b>UTs</b> within the country. Globally, we have worked in{" "}
            <b>12 countries across Asia and Africa</b>, touching the lives of{" "}
            <b>8.2 million workers and their families</b>. Through a robust
            network of over <b>300 partners and collaborators</b>, we leverage
            more than <b>20 years</b> of collective experience to make a
            meaningful impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPresence;
