import Image from 'next/image'

const OurMission = () => {
  return (
    <div className="lg:flex">
      <div className="bg-[url('/ourStory/ourMission.png')] bg-cover flex justify-end items-center w-3/5">
        <div className="triangle-left hidden lg:block"></div>
      </div>
      <img src='/ourStory/ourMissionMobile.png' className='w-full block lg:hidden'/>
      <div className="bg-customRed flex flex-col justify-center px-10 py-10 lg:py-28 space-y-2 lg:w-2/5">
        <h2 className="lg:text-6xl text-3xl text-white">
          OUR <br /> MISSION
        </h2>
        <p className="text-white lg:text-xl  text-3xl lg:w-9/12">
          Enrich the lives of formal and informal workforces by influencing key
          aspects of their wellbeing like physical, emotional, financial &
          environmental wellbeing
        </p>
      </div>
    </div>
  )
}

export default OurMission
