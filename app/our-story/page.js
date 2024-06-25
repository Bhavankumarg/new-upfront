'use client'

import Header from '@components/Header'
import OurMission from '@components/OurMission'
import OurVision from '@components/OurVision'
import Tab from '@components/Tab'
import ThematicAreas from '@components/ThematicAreas'
import { ourStoryTabs } from '@utils/data'
import Image from 'next/image'
import WeBelive from '@components/WeBelieve'
import { useRef } from 'react'
import OurStoryAccordion from '@components/OurStoryAccordion'

const page = () => {
  const worforceRef = useRef(null);
  const webelievehRef = useRef(null);
  const visionmissionRef = useRef(null);
  const ourhistoryRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getActiveTab = (tab) => {
    switch (tab) {
      case "Why Workforce Wellbeing?":
        scrollToSection(worforceRef);
        break;
      case "We Believe":
        scrollToSection(webelievehRef);
        break;
      case "Vision and Mission":
        scrollToSection(visionmissionRef);
        break;
      case "Our History":
        scrollToSection(ourhistoryRef);
        break;
      default:
        console.log(tab);
    }
    console.log(tab)
  }

  return (
    <>
      <div className="bg-ourStory bg-cover h-[60vh] flex flex-col ps-16 pb-8">
        <Header />
        <h1 className="text-white text-6xl mt-auto">
          OUR <br /> STORY
        </h1>
      </div>
      
      {/* Sticky Tab Component */}
      <div className="sticky top-0 z-50 bg-white shadow-md hidden lg:block">
        <Tab tabs={ourStoryTabs} getActiveTab={getActiveTab} />
      </div>

      <div className='block lg:hidden'>
        <OurStoryAccordion />
      </div>

      <div className="lg:px-24 px-10 py-16" ref={worforceRef}>
        <h1 className="text-6xl">
          <span className="text-red-600">WHY</span> WORKFORCE <br /> WELLBEING?
        </h1>
      </div>

      <div className='hidden lg:block'>
        <div className="pb-16 container mx-auto flex justify-center">
          <Image
            src="/ourStory/workForceWellbeing.jpg"
            width={1000}
            height={700}
            className="w-11/12"
            alt=""
          />
        </div>
      </div>

      <div className='block lg:hidden'>
        <div className="pb-16 mx-auto container flex justify-center">
          <Image
            src="/ourStory/workForceWellbeingMobile.png"
            width={1000}
            height={700}
            className="w-11/12"
            alt=""
          />
        </div>
      </div>

      <div ref={webelievehRef}>
        <WeBelive />
      </div>

      <div ref={visionmissionRef}>
        <OurVision />
      </div>

      <OurMission />

      <div className="px-10 py-16" ref={ourhistoryRef}>
        <h1 className="text-6xl lg:px-16 px-7">
          <span className="text-red-600">OUR</span> <br /> HISTORY
        </h1>
        <div className="flex pt-16 justify-center">
          <Image
            src="/ourStory/ourHistory.png"
            width={1000}
            height={700}
            className="w-11/12 hidden lg:block"
            alt=""
          />
          <Image
            src="/ourStory/ourHistoryMobile.png"
            width={1000}
            height={700}
            className="w-11/12 block lg:hidden"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default page
