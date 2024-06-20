"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";


const OurKeyCommunities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[-50px] right-1 z-10 p-2 text-4xl cursor-pointer rounded-full fill-current text-gray-400" 
        onClick={onClick}
      >
        <FaCircleArrowRight />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[-50px] right-12 z-10 p-2 cursor-pointer text-4xl rounded-full fill-current text-gray-400"
        onClick={onClick}
      >
        <FaCircleArrowLeft />
      </div>
    );
  }

  return (
    <>
      <div className="mb-10 text-center relative py-10">
        <Slider {...settings}>
          <div className="p-2 relative ">
            <div className="">
              <a href="#">
                <img
                  className="w-full rounded-0"
                  src="/homePage/case_studies/case_studies1.png"
                  alt=""
                />
              </a>
              <div className="p-5 bg-[#FACDD4] border-0">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-start">
                  Life Skill development among Women Fish Vendors in Tamil Nadu
                  and enhance their knowledge on maintaining hygiene, better
                  decision making, communication and encouraging gender equality
                  in workplaces and communities.
                </p>
                <div className="flex justify-start">
                  <button className="bg-customGray text-white p-3 mt-10">
                    Read Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 relative">
            <div className="w-full rounded-lg">
              <a href="#">
                <img
                  className="w-full rounded-0"
                  src="/homePage//case_studies/case_studies2.png"
                  alt=""
                />
              </a>
              <div className="p-5 bg-[#FACDD4] border-0">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-start">
                  Life Skill development among Women Fish Vendors in Tamil Nadu
                  and enhance their knowledge on maintaining hygiene, better
                  decision making, communication and encouraging gender equality
                  in workplaces and communities.
                </p>
                <div className="flex justify-start">
                  <button className="bg-customGray text-white p-3 mt-10">
                    Read Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 relative">
            <div className="w-full rounded-lg">
              <a href="#">
                <img
                  className="w-full rounded-0"
                  src="/homePage/case_studies/case_studies3.png"
                  alt=""
                />
              </a>
              <div className="p-5 bg-[#FACDD4] border-0">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-start">
                  Life Skill development among Women Fish Vendors in Tamil Nadu
                  and enhance their knowledge on maintaining hygiene, better
                  decision making, communication and encouraging gender equality
                  in workplaces and communities.
                </p>
                <div className="flex justify-start">
                  <button className="bg-customGray text-white p-3 mt-10">
                    Read Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="text-center">
        <p className="text-xl mt-7">
          And Other Workforces Including Plantation Workers, Domestic Workers,
          Gig Workers Etc.
        </p>
      </div>
    </>
  );
};

export default OurKeyCommunities;
