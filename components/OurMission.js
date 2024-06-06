import Image from 'next/image'

const OurMission = () => {
  return (
    <div className="flex">
      <div className="bg-[url('/ourStory/ourMission.png')] bg-cover flex justify-end items-center w-3/5">
        <div className="triangle-left"></div>
      </div>
      <div className="bg-customRed flex flex-col justify-center px-10 py-28 space-y-2 w-2/5">
        <h2 className="text-5xl text-white">
          OUR <br /> MISSION
        </h2>
        <p className="text-white text-xl w-9/12">
          Enrich the lives of formal and informal workforces by influencing key
          aspects of their wellbeing like physical, emotional, financial &
          environmental wellbeing
        </p>
      </div>
    </div>
  )
}

export default OurMission
