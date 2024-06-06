import { impact } from '@utils/data'
import Image from 'next/image'
import React from 'react'

const Impact = () => {
  return (
    <div className="bg-[#F4E7E9] flex justify-between gap-5 mt-10 px-10 py-16">
      <h1 className="text-5xl">IMPACT</h1>
      <div className="w-4/5 space-y-7">
        <h2
          className="text-3xl w-1/2
        "
        >
          Relief, Recovery & Resilience for 82,99,061 individual workers & their
          families
        </h2>
        <ul className="flex flex-wrap gap-3">
          {impact.map((item) => {
            return (
              <li key={item.id} className="relative">
                <div className="">
                  <Image src={item.imageUrl} width={350} height={350} />
                </div>
                <div className="absolute bottom-2 left-2">
                  <p className="text-3xl text-white">{item.count}</p>
                  <p className="text-2xl text-white">{item.title}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Impact
