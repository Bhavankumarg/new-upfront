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
      <Tab tabs={ourStoryTabs} getActiveTab={getActiveTab} />

      <div className="lg:px-24 px-10 py-16" ref={worforceRef}>
        <h1 className="text-6xl">
          <span className="text-red-600">WHY</span> WORKFORCE <br /> WELLBEING?
        </h1>
      </div>

      {/* <div className="relative mb-96">
        <div className="p-10 flex justify-center">
          <ul className="flex justify-between w-3/4 px-6">
            <li className="w-36 h-36 rounded-full border-8 border-[#FACDD4] bg-customGray flex justify-center items-center">
              <p className="text-white text-xl text-center">
                Systemic <br /> Issues
              </p>
            </li>
            <li className="w-36 h-36 rounded-full border-8 border-[#FACDD4] bg-customGray flex justify-center items-center">
              <p className="text-white text-xl text-center">
                This <br /> leads to
              </p>
            </li>
            <li className="w-36 h-36 rounded-full border-8 border-[#FACDD4] bg-customGray flex justify-center items-center">
              <p className="text-white text-xl text-center">
                Our <br /> interventions <br /> work on
              </p>
            </li>
          </ul>
        </div>

        <div className="absolute inset-0 top-1/2 px-10 flex justify-center -z-10">
          <ul className="flex justify-evenly gap-10 w-11/12">
            <li className="w-80">
              <div className="bg-customLightGray pt-28 pb-5 border border-[#707070] rounded-xl">
                <ul className="list-square text-xl px-8">
                  <li>
                    Labour markets are volatile, uncertain, complex, and
                    ambiguous
                  </li>
                  <li>Inefficient and uncapacitated systems</li>
                  <li>
                    Business wellbeing is prioritised over worker wellbeing
                    making both the workers and businesses vulnerable
                  </li>
                  <li>Rising climate, health & occupational risks</li>
                  <li>Low wages and no social security or coverage</li>
                </ul>
              </div>
            </li>
            <li className="w-80">
              <div className="bg-customLightGray pt-28 pb-5 border border-[#707070] rounded-xl">
                <ul className="list-square text-xl px-8">
                  <li>
                    Labour markets are volatile, uncertain, complex, and
                    ambiguous
                  </li>
                  <li>Inefficient and uncapacitated systems</li>
                  <li>
                    Business wellbeing is prioritised over worker wellbeing
                    making both the workers and businesses vulnerable
                  </li>
                  <li>Rising climate, health & occupational risks</li>
                  <li>Low wages and no social security or coverage</li>
                </ul>
              </div>
            </li>
            <li className="w-80">
              <div className="bg-customLightGray pt-28 pb-5 border border-[#707070] rounded-xl">
                <ul className="list-square text-xl px-8">
                  <li>
                    Labour markets are volatile, uncertain, complex, and
                    ambiguous
                  </li>
                  <li>Inefficient and uncapacitated systems</li>
                  <li>
                    Business wellbeing is prioritised over worker wellbeing
                    making both the workers and businesses vulnerable
                  </li>
                  <li>Rising climate, health & occupational risks</li>
                  <li>Low wages and no social security or coverage</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div> */}

      <div className=" pb-16 hidden lg:block container mx-auto flex justify-center">
        <Image
          src="/ourStory/workForceWellbeing.png"
          width={1000}
          height={700}
          className="w-11/12"
          alt=""
        />
      </div>
      <div className="pb-16 block lg:hidden mx-auto container flex justify-center">
        <Image
          src="/ourStory/workForceWellbeingMobile.png"
          width={1000}
          height={700}
          className="w-11/12"
          alt=""
        />
      </div>

      {/* <ThematicAreas /> */}
      <div ref={webelievehRef}>
      <WeBelive/>
      </div>
      <div ref={visionmissionRef}>
      <OurVision />
      </div>
      <div>
      <OurMission />
      </div>

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
