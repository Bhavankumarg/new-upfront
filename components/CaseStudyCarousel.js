'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const OurKeyCommunities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
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
  }

  // function NextArrow(props) {
  //   const { onClick } = props
  //   return (
  //     <div
  //       className="absolute top-0 right-0 z-10 p-2 cursor-pointer bg-white rounded-full shadow-lg"
  //       onClick={onClick}
  //     >
  //       <FaArrowRight />
  //     </div>
  //   )
  // }

  // function PrevArrow(props) {
  //   const { onClick } = props
  //   return (
  //     <div
  //       className="absolute top-0 left-0 z-10 p-2 cursor-pointer bg-white rounded-full shadow-lg"
  //       onClick={onClick}
  //     >
  //       <FaArrowLeft />
  //     </div>
  //   )
  // }

  return (
    <>
      <div className="space-y-5 px-10 mb-10 text-center relative">
        <Slider {...settings}>
          <div className="p-2">
            <div className="max-w-sm bg-white rounded-lg">
              <a href="#">
                <img className="rounded-0" src="/homePage/case_studies1.png" alt="" />
              </a>
              <div className="p-5 bg-[#FACDD4] border-0">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-start">
                  Life Skill development among Women Fish Vendors in Tamil Nadu and enhance their knowledge on maintaining hygiene, better decision making, communication and encouraging gender equality in workplaces and communities.
                </p>
                <div className="flex justify-start">
                  <button className="bg-customGray text-white p-3 mt-10">
                    Read Casestudy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="max-w-sm bg-white rounded-lg">
              <a href="#">
                <img className="rounded-0" src="/homePage/case_studies1.png" alt="" />
              </a>
              <div className="p-5 bg-[#FACDD4] border-0">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-start">
                  Life Skill development among Women Fish Vendors in Tamil Nadu and enhance their knowledge on maintaining hygiene, better decision making, communication and encouraging gender equality in workplaces and communities.
                </p>
                <div className="flex justify-start">
                  <button className="bg-customGray text-white p-3 mt-10">
                    Read Casestudy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="max-w-sm bg-white rounded-lg">
              <a href="#">
                <img className="rounded-0" src="/homePage/case_studies1.png" alt="" />
              </a>
              <div className="p-5 bg-[#FACDD4] border-0">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-start">
                  Life Skill development among Women Fish Vendors in Tamil Nadu and enhance their knowledge on maintaining hygiene, better decision making, communication and encouraging gender equality in workplaces and communities.
                </p>
                <div className="flex justify-start">
                  <button className="bg-customGray text-white p-3 mt-10">
                    Read Casestudy
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
  )
}

export default OurKeyCommunities
