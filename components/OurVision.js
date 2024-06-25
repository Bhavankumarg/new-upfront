import Image from 'next/image'

const OurVision = () => {
  return (
    <div className="lg:flex bg-customBlack pb-16 lg:pb-0">
      <div className="lg:flex lg:w-2/5">
        <div className="bg-customRed flex flex-col justify-center px-10 py-28 space-y-2">
          <h2 className="lg:text-5xl text-7xl text-white">
            OUR <br /> VISION
          </h2>
          <p className="text-white lg:text-2xl text-3xl lg:w-3/4 w-full">
            Make Wellbeing a Reality for the Workforces
          </p>
        </div>
        <div className="hidden lg:block triangle-right self-center triangle-red"></div>
      </div>
      <div className="lg:w-3/5 py-12 ml-20 lg:ml-0">
        <Image
          src="/ourStory/ourVision.png"
          width={750}
          height={300}
          alt=""
          className="w-9/12 hidden lg:block"
        />
         <Image
          src="/ourStory/ourVisionMobile.png"
          width={750}
          height={300}
          alt=""
          className="w-9/12 block lg:hidden"
        />
      </div>
    </div>
  )
}

export default OurVision
