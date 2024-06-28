import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaInstagram,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";

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
              <div className="lg:w-[175px] w-[300px] h-[1px] bg-customGrayMd my-3"></div>
              <Link href="/our-story/" className="flex gap-10 hover:text-red-600 group">
                <li className="flex-grow">Our Story</li>
                <FaArrowRight className="mt-1 me-20 group-hover:animate-spin" />
              </Link>

              <Link
                href="/our-team"
                className="flex gap-9 mt-2  hover:text-red-600 group"
              >
                <li className="flex-grow">Our Team</li>
                <FaArrowRight className="mt-1 me-20 group-hover:animate-spin " />
              </Link>
            </ul>
            <ul className="text-customGrayMd text-xl mb-8 lg:mb-0">
              <h3 className="text-white text-2xl">What We Do</h3>
              <div className="lg:w-[175px] w-[300px] h-[1px] bg-customGrayMd my-3"></div>
              <Link
                href="/what-we-do"
                className="flex gap-10 text-white/60  hover:text-red-600 group"
              >
                <li className="flex-grow">What We Do</li>
                <FaArrowRight className="mt-1 me-20 group-hover:animate-spin " />
              </Link>
            </ul>
            <ul className="text-customGrayMd text-xl mb-8 lg:mb-0">
              <h3 className="text-white text-2xl">Insights</h3>
              <div className="lg:w-[220px] w-[300px] h-[1px] bg-customGrayMd my-3"></div>
              <Link
                href="/insights"
                className="flex items-center justify-between text-white/60 hover:text-red-600 group"
              >
                <li className="flex-grow">Stories</li>
                <FaArrowRight className="me-20 group-hover:animate-spin " />
              </Link>
              <Link
                href="/insights"
                className="flex items-center justify-between text-white/60 mt-2 hover:text-red-600 group "
              >
                <li className="flex-grow">Case Studies</li>
                <FaArrowRight className="me-20 group-hover:animate-spin " />
              </Link>
              <Link
                href="/insights"
                className="flex items-center justify-between text-white/60 mt-2 hover:text-red-600 group"
              >
                <li className="flex-grow">Blogs</li>
                <FaArrowRight className="me-20 group-hover:animate-spin " />
              </Link>
              <Link
                href="/insights"
                className="flex items-center justify-between text-white/60 mt-2 hover:text-red-600 group "
              >
                <li className="flex-grow me-3">News and Publications</li>
                <FaArrowRight className="me-20 group-hover:animate-spin " />
              </Link>
            </ul>
            <ul className="text-white/60 text-xl">
              <Link href="/contact-us">
                <h3 className="text-white text-2xl">Contact Us</h3>
              </Link>
              <div className="lg:w-[175px] w-[300px] h-[1px] bg-customGrayMd my-3"></div>
              <Link href="mailto:Info@upfrontglobal.com">
                <li className="mt-5  hover:text-red-600 group">
                  info@upfrontglobal.com
                </li>
              </Link>
              <li className="flex pt-5 gap-5 text-3xl ">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/showcase/upfrontcg/"
                  className="hover:text-white"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  target="_blank"
                  href="https://twitter.com/UpfrontCG"
                  className="hover:text-white"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/upfront.global/"
                  className="hover:text-white"
                >
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-customGray flex py-6">
        <p className="text-gray-400 px-10">
          Upfront is an initiative of the Catalyst Group 2024. All Rights
          Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
