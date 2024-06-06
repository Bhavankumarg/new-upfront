'use client'

import { useState } from 'react'

const Tab = ({ tabs, getActiveTab }) => {
  const [active, setActive] = useState(1)

  const getActiveId = (id) => {
    setActive(id)
  }

  return (
    <>
      <ul className="bg-customLightGray flex">
        {tabs.map((item) => {
          return (
            <li
              key={item.id}
              className={
                active === item.id
                  ? 'bg-activeTabButton border-b-4 border-black'
                  : ''
              }
            >
              <button
                type="button"
                className="px-8 py-4 text-[#4A4A4A] text-xl"
                onClick={() => {
                  getActiveId(item.id)
                  getActiveTab(item.tab)
                }}
              >
                {item.tab}
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Tab
