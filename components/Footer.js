import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaInstagram, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-customBlack pt-12 pb-24 px-10">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between">
          <div className="mb-10 lg:mb-0">
            <Image
              src="/homePage/upfrontLogo.svg"
              width={118}
              height={111}
              alt="upfront logo"
            />
          </div>
          <div className="flex flex-wrap gap-16 lg:gap-28">
            <ul className="text-white/60 text-xl mb-8 lg:mb-0">
              <h3 className="text-white text-2xl">About Us</h3>
              <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
              <Link href="/our-story/" className="flex gap-10">
                <li>Our Story</li>
                <FaArrowRight className="mt-1" />
              </Link>
              <Link href="/our-team" className="flex gap-9 mt-2">
                <li>Our Team</li>
                <FaArrowRight className="mt-1" />
              </Link>
            </ul>
            <ul className="text-customGrayMd text-xl mb-8 lg:mb-0">
              <h3 className="text-white text-2xl">What We Do</h3>
              <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
              <Link href="/what-we-do" className="flex gap-10 text-white/60">
                <li>What We Do</li>
                <FaArrowRight className="mt-1" />
              </Link>
            </ul>
            <ul className="text-customGrayMd text-xl mb-8 lg:mb-0">
              <h3 className="text-white text-2xl">Insights</h3>
              <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
              <Link href="/insights" className="flex items-center justify-between text-white/60">
                <li className="flex-grow">Stories</li>
                <FaArrowRight />
              </Link>
              <Link href="/insights" className="flex items-center justify-between text-white/60 mt-2">
                <li className="flex-grow">Case Studies</li>
                <FaArrowRight />
              </Link>
              <Link href="/insights" className="flex items-center justify-between text-white/60 mt-2">
                <li className="flex-grow">Blogs</li>
                <FaArrowRight />
              </Link>
              <Link href="/insights" className="flex items-center justify-between text-white/60 mt-2">
                <li className="flex-grow">News and Publications</li>
                <FaArrowRight />
              </Link>
            </ul>
            <ul className="text-white/60 text-xl">
              <Link href="/contact-us">
                <h3 className="text-white text-2xl">Contact Us</h3>
              </Link>
              <div className="w-[175px] h-[1px] bg-customGrayMd my-3"></div>
              <Link href="mailto:Info@upfrontglobal.com">
                <li className="mt-5">Info@upfrontglobal.com</li>
              </Link>
              <li className="flex pt-5 gap-5 text-3xl">
                <Link href="https://www.linkedin.com/showcase/upfrontcg/">
                  <FaLinkedin />
                </Link>
                <Link href="https://twitter.com/UpfrontCG">
                  <FaSquareXTwitter />
                </Link>
                <Link href="https://www.instagram.com/upfront.global/" className="text-white">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-customGray flex justify-center py-6">
        <p className="text-gray-400 text-center">
          Upfront is an initiative of the Catalyst Group 2024. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
