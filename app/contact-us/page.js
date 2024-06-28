"use client";

import Header from "@components/Header";
import Tab from "@components/Tab";
import { contactUsTabs } from "@utils/data";
import { Button } from "flowbite-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import ContactUsAccordion from "@components/ContactUsAccordion";
import ContactForms from "@utils/ContactForms";
import PartnerForm from "@utils/PartnerForm";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState(contactUsTabs('Partner With Us'));

  const renderContent = () => {
    switch (activeTab) {
      case "Partner With Us":
        return (
          <div className="ps-10 mt-10">
            <p className="text-black lg:text-6xl text-3xl">GET INVOLVED</p>
            <p className="text-black mt-4 text-xl">
              Join the force behind the Wellbeing of the Workforces
            </p>
            <PartnerForm />

{/* 
            <div className="lg:flex lg:gap-10 pt-10">
              <Button
                className="relative bg-black lg:w-96 w-80 p-3 group hover:bg-red-600 transition-all duration-300"
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
              >
                <span className="text-xl flex justify-center">
                  Partner with us
                </span>
                <FaArrowRightLong className="text-3xl absolute right-4 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
              </Button>

              <Button className="relative bg-black lg:w-96 w-80 p-3 group hover:bg-red-600 transition-all duration-300">
                <span className="text-xl">Invest</span>
                <FaArrowRightLong className="text-3xl absolute right-4 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
              </Button>
              <Button className="relative bg-black lg:w-96 w-80 p-3 group hover:bg-red-600 transition-all duration-300">
                <span className="text-xl">Work with us</span>
                <FaArrowRightLong className="text-3xl absolute right-4 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
              </Button>
            </div> */}

            {/* <div
              id="default-modal"
              tabIndex="-1"
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="p-4 md:p-5 space-y-4">
                    <PartnerForm />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        );
      case "Join Us":
        return (
          <div className="bg-[#E8E8E8] pb-10">
            <div className="px-14 mt-10 ">
              <p className="text-black lg:text-6xl text-3xl pt-10">
                CAREER <br /> OPPORTUNITIES
              </p>
              <p className="text-xl text-red-500 mt-3">No Current Openings</p>
              <ContactForms />
            </div>
          </div>
        );
      case "Contact Info":
        return (
          <div className="mx-14 pb-5">
            <div className="mt-10 ">
              <p className="text-black lg:text-6xl text-3xl">CONTACT INFO</p>
            </div>

            <div className="lg:grid grid-cols-3 gap-4 text-xl border-b border-gray-400">
              <div className="p-4 pt-7">Office Address:</div>
              <div className="p-4 ">
                <span className="text-xl">Bengaluru:</span>
                <div>#25, 1st Main, AECS Layout, Ashwath Nagar, Bengaluru, 560094</div>
              </div>

              <div className="p-4 text-xl">
                <span className="text-xl">Delhi:</span>
                <div>A-10, Second Floor, Green Park, New Delhi, 110016</div>
              </div>
            </div>

            <div className="lg:grid grid-cols-3 gap-4 text-xl border-b border-gray-400">
              <div className="lg:p-4 pt-5 px-4">Email ID:</div>
              <div className="lg:p-4 px-4">Info@upfrontglobal.com</div>
              <div className="p-4"></div>
            </div>

            <div className="lg:grid grid-cols-3 lg:gap-4 text-xl">
              <div className="lg:p-4 px-4 pt-5">Phone Number:</div>
              <div className="p-4"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="lg:bg-[url('/contactUs/banner.png')] bg-[url('/contactUs/bannerMobile.png')] bg-cover lg:h-[80vh] h-[600px] flex flex-col pb-8">
        <h1 className="text-white text-6xl mt-auto lg:ps-16 ps-10">CONTACT US</h1>
      </div>

      <div className=" sticky top-24 bg-white shadow-md z-10">
        <Tab tabs={contactUsTabs} getActiveTab={setActiveTab} />
      </div>



      {renderContent()}
    </>
  );
};

export default ContactPage;
