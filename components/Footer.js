import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className="bg-customBlack pt-12 pb-24 px-10 flex gap-28">
        <div>
          <Image
            src="/homePage/upfrontLogo.svg"
            width={118}
            height={111}
            alt="upfront logo"
          />
        </div>
        <div className="flex gap-16">
          <ul className="text-white/60 text-xl">
            <h3 className="text-white text-2xl">ABOUT US</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
            <Link href="/our-story/" target='_blank'><li>Our Story</li></Link>
            <Link href="what-we-do" target='_blank'><li>What We Do</li></Link>
            <Link href="our-team" target='_blank'><li>Our Team</li></Link>
          </ul>
          <ul className="text-customGrayMd text-xl">
            <h3 className="text-white text-2xl">OUR WORK</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
          </ul>
          <ul className="text-customGrayMd text-xl">
            <h3 className="text-white text-2xl">INSIGHTS</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
          </ul>
          <ul className="text-white/60 text-xl">
            <h3 className="text-white text-2xl">CONTACT US</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
            <li>Email: 123@gmail.com</li>
            <li>Phone: +91 1234567890</li>
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
