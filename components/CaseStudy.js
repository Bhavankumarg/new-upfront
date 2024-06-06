import Image from 'next/image'
import React from 'react'
import CaseStudyCarousel from './CaseStudyCarousel'

const CaseStudy = () => {
  return (
    <div className="bg-customLightGray bg-opacity-60 p-10 flex flex-col">
      <h2 className="text-5xl">
        <span className="text-red-600">CASE</span> STUDIES
      </h2>
      <div className="px-16 py-8 text-center">
        <CaseStudyCarousel />
        <button className="bg-customGray self-center text-white p-3 mt-10">
          View All Casestudies
        </button>
      </div>
    </div>
  )
}

export default CaseStudy
