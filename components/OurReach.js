import { ourReach } from '@utils/data'
import React from 'react'

const OurReach = () => {
  return (
    <div className="bg-customLightGray bg-opacity-60 py-16 px-10 flex justify-between items-center">
      <h1 className="text-6xl">
        <span className="text-red-600">OUR</span> <br /> REACH
      </h1>
      <ul className="flex gap-14 px-20">
        {ourReach.map((item, index) => {
          return (
            <li
              key={item.id}
              className={`ps-5 ${
                index === 0 ? '' : 'border-s-2 border-gray-400'
              }`}
            >
              <div className="space-y-4">
                <h2 className="text-4xl text-red-600">{item.count}</h2>
                <p className="w-11/12">{item.area}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default OurReach
