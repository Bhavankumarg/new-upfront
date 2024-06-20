import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="bg-customBlack pt-12 pb-24 px-10 lg:flex gap-28">
        <div>
          <Image
            src="/homePage/upfrontLogo.svg"
            width={118}
            height={111}
            alt="upfront logo"
          />
        </div>
        <div className="lg:flex gap-16">
          <ul className="text-white/60 text-xl">
            <h3 className="text-white text-2xl">ABOUT US</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
            <Link href="/our-story/" className='flex gap-10' target='_blank'><li>Our Story</li><FaArrowRight className='mt-1'/></Link>
            <Link href="what-we-do" className='flex gap-4' target='_blank'><li>What We Do</li><FaArrowRight className='mt-1'/></Link>
            <Link href="our-team" className='flex gap-9 ' target='_blank'><li>Our Team</li><FaArrowRight className='mt-1'/></Link>
          </ul>
          <ul className="text-customGrayMd text-xl">
            <h3 className="text-white text-2xl lg:mt-0 mt-5" >OUR WORK</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
          </ul>
          <ul className="text-customGrayMd text-xl">
            <h3 className="text-white text-2xl lg:mt-0 mt-5">INSIGHTS</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
          </ul>
          <ul className="text-white/60 text-xl lg:mt-0 mt-5">
            <h3 className="text-white text-2xl lg:mt-0">CONTACT US</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
            <li className='mt-5 lg:mt-0'>Info@upfrontglobal.com</li>
            <li className='lg:mt-3 mt-5'>Phone: +91 01234567890</li>
          </ul>
        </div>
      </div>
      <div className="bg-customGray flex px-10 py-6">
        <p className="text-gray-400">
          Upfront s an initiative of the Catalyst Group 2024. All Rights
          Reserved
        </p>
      </div>
    </>
  )
}

export default Footer
