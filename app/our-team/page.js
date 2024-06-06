import Header from '@components/Header'
import { coreTeam, ourAdvisors } from '@utils/data'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <div className="bg-[url('/coreTeam/banner.png')] bg-cover h-[60vh] flex flex-col">
        <Header />
        <h1 className="text-center text-white text-2xl m-auto">
          Collage of Upfront team pictures
        </h1>
      </div>
      <div className="px-10 py-16 ">
        <h1 className="text-6xl mb-6">
          <span className="text-red-600">CORE</span> TEAM
        </h1>
        <hr />
        <ul className="flex  flex-wrap gap-13 p-3 mt-8">
          {coreTeam.map((item) => {
            return (
              <li key={item.id} className="border-s border-black w-1/5">
                <div className="ps-3 h-full aspect-w-1 aspect-h-1 flex flex-col">
                  <Image
                    src={item.imageUrl}
                    width={250}
                    height={250}
                    alt={item.name}
                    className="object-cover mb-3"
                  />
                  <p>{item.name}</p>
                  <p className="text-[#7E7E7E] w-9/12 mb-3">{item.post}</p>
                  <p className="text-4xl text-[#0177B7] mt-auto">{item.logo}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
{/* 
      <div className="px-10 pt-10 pb-16 bg-customLightGray/25 ">
        <h1 className="text-6xl mb-6">
          <span className="text-red-600">OUR</span> ADVISORS
        </h1>
        <hr />
        <ul className="flex justify-between flex-wrap gap-6 p-3 mt-8">
          {ourAdvisors.map((item) => {
            return (
              <li key={item.id} className="border-s border-black">
                <div className="ps-3 space-y-2">
                  <Image
                    src={item.imageUrl}
                    width={250}
                    height={250}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <p className="text-[#7E7E7E]">{item.post}</p>
                  <p className="text-4xl text-[#0177B7] mt-3">{item.logo}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div> */}
    </>
  )
}

export default page
