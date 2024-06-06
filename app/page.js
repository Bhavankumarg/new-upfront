import CaseStudy from '@components/CaseStudy'
import Header from '@components/Header'
import CarouselScreen from '@components/CarouselScreen'
import ImpactStories from '@components/ImpactStories'
import OurPartners from '@components/OurPartners'
import OurPresence from '@components/OurPresence'
import OurReach from '@components/OurReach'
import ThematicAreas from '@components/ThematicAreas'
import WhatWeDo from '@components/WhatWeDo'
import WhoAreWe from '@components/WhoAreWe'
import { homeBannerCarousel } from '@utils/data'

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <CarouselScreen details={homeBannerCarousel} />
      </div> 
      <div className="max-w-screen-xl mx-auto px-40 py-20 tracking-wide">
      <h1 className="text-6xl text-center">
          <span className="text-red-600">WHY WORKFORCE</span> <br /> WELLBEING?
        </h1>
        <p className="text-center mt-5">
          Workforces are key to economic growth however,as the world progresses post COVId 19 pandemic, we have transitioned from a Volatile, Uncertain, Complex, and Ambiguous (VUCA) world to a Brittle, Anxious, Non-Linear, and Incomprehensible world. Global economics is also moving towards circularity, however with that is also a growing range of inequalities encompassing global wealth, income, gender and ecological inequality across the world. The labour markets and systems in most cases may be incapacitated to adjust to the changes and leaves the workforces continuing to experience vulnerability. With a belief that a safe and enabling work environment is non-negotiable for the workforce to thrive, Upfront strives to make systems, capacities and markets stronger and more inclusive to ensure both workforce and businesses wellbeing, but not at the cost of each other.
        </p>
      </div>
      <WhoAreWe />
      <WhatWeDo />
      <OurReach />
      <OurPresence />
      <ThematicAreas />
      {/* <ImpactStories /> */}
      <CaseStudy />
      <OurPartners />
    </>
  )
}
