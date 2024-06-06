'use client'

import { useRouter } from 'next/navigation'
import Header from '@components/Header'
import Tab from '@components/Tab'
import { insights, insightsTabs } from '@utils/data'
import Image from 'next/image'
import { useState } from 'react'

const page = () => {
  const router = useRouter()
  const [visibleItems, setVisibleItems] = useState(8)
  const [activeTab, setActiveTab] = useState('Stories')

  const handleClick = (category, title) => {
    router.push(`insights/${category}/${title}`)
  }

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4)
  }

  const getActiveTab = (tab) => {
    setActiveTab(tab)
  }

  const getFilteredData = () => {
    const filteredData =
      activeTab !== 'All'
        ? insights.filter((item) => item.category === activeTab)
        : insights
    return filteredData
  }

  return (
    <>
      <div className="bg-[url('/insights/banner.png')] bg-cover h-[60vh] flex flex-col ps-16 pb-8">
        <Header />
        <h1 className="text-white text-6xl mt-auto">INSIGHTS</h1>
      </div>
      <Tab tabs={insightsTabs} getActiveTab={getActiveTab} />

      <div className="px-10 py-16 ">
        <h1 className="text-6xl mb-6 text-customGray">
          {activeTab.toLocaleUpperCase()}
        </h1>
        <hr />
        <ul className="flex flex-wrap gap-6 mt-8">
          {getFilteredData()
            .slice(0, visibleItems)
            .map((item) => {
              return (
                <li key={item.id} className="border-s border-black mb-10">
                  <div className="ps-3 w-80">
                    <div className="relative">
                      <Image
                        src={item.imageUrl}
                        width={250}
                        height={250}
                        className="w-full"
                        alt={item.name}
                      />
                      <p className="absolute top-0 text-sm bg-black/70 text-white px-3 py-1">
                        {item.badge}
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm mt-3">{item.date}</p>
                    <p className="mt-5">{item.title}</p>
                    <p className="text-sm mt-3">{item.description}</p>
                    <button
                      className="px-7 py-1 mt-6 border border-customLightGray"
                      onClick={() => handleClick(item.category, item.title)}
                    >
                      Read
                    </button>
                  </div>
                </li>
              )
            })}
        </ul>
        <div className="text-center mt-7">
          {getFilteredData().length > visibleItems && (
            <button
              onClick={handleLoadMore}
              className="bg-customLightGray border border-customGrayMd px-8 py-3"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default page
