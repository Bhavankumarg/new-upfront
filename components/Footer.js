import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
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
            <h3 className="text-white text-2xl">About Us</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
            <Link href="/our-story/" className="flex gap-10">
              <li>Our Story</li>
              <FaArrowRight className="mt-1" />
            </Link>

            <Link href="our-team" className="flex gap-9 ">
              <li>Our Team</li>
              <FaArrowRight className="mt-1" />
            </Link>
          </ul>
          <ul className="text-customGrayMd text-xl">
            <h3 className="text-white text-2xl lg:mt-0 mt-5">What We Do</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
            <Link href="/what-we-do" className="flex gap-10 text-white/60">
              <li>What We Do</li>
              <FaArrowRight className="mt-1" />
            </Link>
          </ul>
          <ul className="text-customGrayMd text-xl">
            <h3 className="text-white text-2xl">Insights</h3>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
            <Link
              href="/insights"
              className="flex items-center justify-between text-white/60"
            >
              <li className="flex-grow">Stories</li>
              <FaArrowRight />
            </Link>
            <Link
              href="/insights"
              className="flex items-center justify-between text-white/60"
            >
              <li className="flex-grow">Case Studies</li>
              <FaArrowRight />
            </Link>
            <Link
              href="/insights"
              className="flex items-center justify-between text-white/60"
            >
              <li className="flex-grow">Blogs</li>
              <FaArrowRight />
            </Link>
            <Link
              href="/insights"
              className="flex items-center justify-between text-white/60"
            >
              <li className="flex-grow">News and Publications</li>
              <FaArrowRight />
            </Link>
          </ul>
          <ul className="text-white/60 text-xl lg:mt-0 mt-5">
            <Link href="/contact-us">
              <h3 className="text-white text-2xl lg:mt-0">Contact Us</h3>
            </Link>
            <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
            <Link href="mailto:Info@upfrontglobal.com">
              <li className="mt-5 lg:mt-0">Info@upfrontglobal.com</li>
              <li className="flex pt-5 gap-5 text-3xl">
              <Link href="https://www.linkedin.com/showcase/upfrontcg/">
            <FaLinkedin className="" />
          </Link>
          <Link href="https://twitter.com/UpfrontCG">
            <FaSquareXTwitter className="" />
          </Link>
              <Link href="https://www.instagram.com/upfront.global/" className="text-white">
          <FaInstagram className=""/>
          </Link>
              </li>
            </Link>
            {/* <li className='lg:mt-3 mt-5'>Phone: +91 01234567890</li> */}
          </ul>
        </div>

        <div>
          
          

          
        </div>
      </div>

      <div className="bg-customGray flex px-10 py-6">
        <p className="text-gray-400">
          Upfront is an initiative of the Catalyst Group 2024. All Rights
          Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
