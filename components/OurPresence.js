import Image from 'next/image'
import React from 'react'

// /homePage/upfrontLogo.svg

const OurPresence = () => {
  return (
    <div className="flex">
      <div className="w-1/2 relative">
        <div className="group relative">
          <Image
            src="/homePage/map.png"
            width={600}
            height={600}
            className="w-full"
            alt="map"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center cursor-pointer justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/homePage/indiaMap.png"
              width={500}
              height={500}
              alt="India"
            />
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-red-600 flex flex-col justify-center items-center">
        <div className="w-3/5 space-y-4">
          <h2 className="text-6xl text-white">
            OUR <br /> PRESENCE
          </h2>
          <p className="text-red-200">
            We are based out of India and have worked across{' '}
            <span className="text-white font-semibold">17 states</span> and{' '}
            <span className="text-white font-semibold">UTs </span>
            within the country. Globally we have worked in{' '}
            <span>12 countries across Asia and Africa.</span> touching the lives
            of{' '}
            <span className="text-white font-semibold">
              8.2 million workers and their families.
            </span>{' '}
            Through a robust network of over{' '}
            <span className="text-white font-semibold">
              300 partners and collaborators,
            </span>{' '}
            we leverage more than{' '}
            <span className="text-white font-semibold">20 years</span> of
            collective experience to make a meaningful impact.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurPresence
