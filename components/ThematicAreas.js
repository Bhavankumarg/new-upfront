'use client'

import { thematicAreas } from '@utils/data'
import Image from 'next/image'
import React, { useRef } from 'react'

const ThematicAreas = () => {
  const ulRef = useRef(null)

  const handleHover = () => {
    if (ulRef.current) {
      ulRef.current.scrollLeft += 9999
    }
  }

  return (
    <div className="flex items-center gap-4 bg-customGray">
      <div className="flex">
        <div className="bg-customGrayMd h-full text-white flex items-center justify-center px-10 py-28">
          <h2 className="text-4xl text-white">
            THEMATIC <br /> AREAS
          </h2>
        </div>
        <div className="triangle-right self-center"></div>
      </div>
      <ul
        className="flex gap-14 ps-10 pe-40 overflow-x-auto hide-scrollbar scroll-smooth focus:scroll-auto cursor-pointer"
        onMouseOver={handleHover}
        ref={ulRef}
      >
        {thematicAreas.map((item) => {
          return (
            <li
              key={item.id}
              className={`ps-5 ${
                item.id === 1 ? '' : 'border-s-2 border-gray-400'
              }`}
            >
              <div className="space-y-3 flex flex-col justify-center w-24">
                <Image
                  src={item.logo}
                  width={50}
                  height={50}
                  alt={item.title}
                />
                <p className="text-white">{item.title}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ThematicAreas
