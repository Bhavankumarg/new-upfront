import Image from 'next/image'
import React from 'react'
import CaseStudyCarousel from './CaseStudyCarousel'

const CaseStudy = () => {
  return (
    <div className="bg-customLightGray bg-opacity-60 lg:p-10 flex flex-col">
      <h2 className="text-5xl lg:p-0 p-5 lg:mt-0 mt-7">
        <span className="text-red-600">CASE</span> STUDIES
      </h2>
      <div className="lg:px-16 py-8 text-center lg:p-0 p-2">
        <CaseStudyCarousel />
        <button className="bg-customGray self-center text-white p-3">
          View All Case Studies
        </button>
      </div>
    </div>
  )
}

export default CaseStudy
