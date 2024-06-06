'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const OurKeyCommunities = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  return (
    <>
      <div className="space-y-5 px-10 mb-10 text-center">
        <div>
          <Slider {...settings}>
            <div>
              <div class="max-w-sm bg-white rounded-lg">
                <a href="#">
                  <img class="rounded-0" src="/homePage/case_studies1.png" alt="" />
                </a>
                <div class="p-5 bg-[#FACDD4] border-0">
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-start">
                    Life Skill development among Women Fish Vendors in Tamil Nadu and enhance their knowledge on maintaining hygiene, better decision making, communication and encouraging gender equality in workplaces and communities.
                  </p>
                  <div class="flex justify-start">
                    <button class="bg-customGray text-white p-3 mt-10">
                      Read Casestudy
                    </button>
                  </div>
                </div>
              </div>

            </div>
            <div class="max-w-sm bg-white rounded-lg">
              <a href="#">
                <img class="rounded-0" src="/homePage/case_studies1.png" alt="" />
              </a>
              <div class="p-5 bg-[#FACDD4] border-0">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-start">
                  Life Skill development among Women Fish Vendors in Tamil Nadu and enhance their knowledge on maintaining hygiene, better decision making, communication and encouraging gender equality in workplaces and communities.
                </p>
                <div class="flex justify-start">
                  <button class="bg-customGray text-white p-3 mt-10">
                    Read Casestudy
                  </button>
                </div>
              </div>
            </div>


            <div>

              <div class="max-w-sm bg-white rounded-lg">
                <a href="#">
                  <img class="rounded-0" src="/homePage/case_studies1.png" alt="" />
                </a>
                <div class="p-5 bg-[#FACDD4] border-0">
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-start">
                    Life Skill development among Women Fish Vendors in Tamil Nadu and enhance their knowledge on maintaining hygiene, better decision making, communication and encouraging gender equality in workplaces and communities.
                  </p>
                  <div class="flex justify-start">
                    <button class="bg-customGray text-white p-3 mt-10">
                      Read Casestudy
                    </button>
                  </div>
                </div>
              </div>


            </div>
          </Slider>
        </div>
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
