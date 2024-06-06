import Link from 'next/link'
import CarouselFull from './CarouselFull'
import { whoAreWeCarousel } from '@utils/data'

const WhoAreWe = () => {
  return (
    <div className="flex justify-between">
      <div className="w-3/5">
        <CarouselFull details={whoAreWeCarousel} />
      </div>
      <div className="w-2/5 ps-10 flex flex-col justify-between items-start">
        <h1 className="text-6xl">
          <span className="text-red-600">WHO</span> <br /> ARE WE?
        </h1>
        <p className="w-3/5 tracking-wide mt-7 mb-5">
          Upfront strives to make wellbeing a reality for formal and informal
          workforces. We are a proudly Indian and global entity that is
          committed to enriching the lives of millions of workforces working for
          their rights, entitlements, health, agency, safety, financial security
          and building resilience. We are part of the Catalyst Group, a social
          enterprise platform that enhances the health and wealth of vulnerable
          people and the planet.
        </p>
        <Link href="/what-we-do">
          <button className="border border-gray-300 px-5 py-2">
            Find out more
          </button>
        </Link>
      </div>
    </div>
  )
}

export default WhoAreWe
