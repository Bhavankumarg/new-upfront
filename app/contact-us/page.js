"use client";

import Header from "@components/Header";
import Tab from "@components/Tab";
import { contactUsTabs } from "@utils/data";
import { Button } from "flowbite-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";
import ContactUsAccordion from "@components/ContactUsAccordion";
import ContactForm from "@utils/ContactForm";
import ContactFormMobile from "@utils/ContactFormMobile";
import ContactForms from "@utils/ContactForms";

const page = () => {
  const partnerRef = useRef(null);
  const careerRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const getActiveTab = (tab) => {
    switch (tab) {
      case "Partner With Us":
        scrollToSection(partnerRef);
        break;
      case "Career Opportunities":
        scrollToSection(careerRef);
        break;
      case "Contact Info":
        scrollToSection(contactRef);
        break;
        console.log(tab);
    }
  };
  return (
    <>
      <div className="bg-[url('/contactUs/banner.png')] bg-cover h-[60vh]">
        <Header />
      </div>
      <div className="hidden lg:block sticky top-0 bg-white shadow-md z-0">
        <Tab tabs={contactUsTabs} getActiveTab={getActiveTab} />
      </div>

      <div className="block lg:hidden">
        <ContactUsAccordion />
      </div>

      <div className="hidden lg:block">
        <div className="lg:ms-16 ps-10 mt-10">
          <p className="text-black text-5xl">GET INVOLVED</p>
          <p className="text-black mt-4 text-xl">
            Join the force behind the Wellbeing of the Workforces
          </p>
          <div className="lg:flex lg:gap-10 pt-10 " ref={partnerRef}>
            <Button className="relative bg-black lg:w-96 w-80 p-3 group hover:bg-red-600 transition-all duration-300">
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
          </div>
        </div>

        <div className="bg-[#E8E8E8] pb-10" ref={careerRef}>
          <div className="px-14 mt-10 ">
            <p className="text-black text-5xl pt-10">
              CAREER <br /> OPPORTUNITIES
            </p>
            {/* <p className="text-black mt-4 text-xl">
              We offer rewarding career opportunities for XYZ aspirants.
            </p> */}
            <p className="text-xl text-red-500 mt-3">Current Openings</p>

            <div className="pt-10">
              <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-400 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Marketing and Communications Lead</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-1"
                  class="hidden"
                  aria-labelledby="accordion-collapse-heading-1"
                >
                  <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400"></p>
                    <p class="text-gray-500 dark:text-gray-400"></p>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-2">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    data-accordion-target="#accordion-collapse-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-collapse-body-2"
                  >
                    <span>Marketing Manager</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-2"
                  class="hidden"
                  aria-labelledby="accordion-collapse-heading-2"
                >
                  <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p></p>
                  </div>
                </div>

                <div
                  id="accordion-collapse-body-3"
                  class="hidden"
                  aria-labelledby="accordion-collapse-heading-3"
                >
                  <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      The main difference is that the core components from
                      Flowbite are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Flowbite relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      However, we actually recommend using both Flowbite,
                      Flowbite Pro, and even Tailwind UI as there is no
                      technical reason stopping you from using the best of two
                      worlds.
                    </p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      Learn more about these technologies:
                    </p>
                    <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                      <li>
                        <a
                          href="https://flowbite.com/pro/"
                          class="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Flowbite Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/"
                          rel="nofollow"
                          class="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <ContactForms />
              {/* <ContactForm/> */}
              {/* <ContactFormMobile /> */}
            {/* form start */}

            {/* <div className="bg-[#4A4A4A] py-1 px-5 mt-5 ">
              <div className=" mt-10 ">
                <p className="text-white ">
                  If you would like to explore an opportunity to work with
                  Upfront,
                </p>
                <p className="text-white">
                  please fill up this form and submit
                </p>

                <div className="mt-5 p-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-select border border-gray-500 lg:w-full px-3 py-2"
                        id="*firstName"
                        placeholder="*First Name"
                        name="*firstName"
                        required
                      />
                    </div>
                    <div className="mb-3 col-span-3 md:col-span-1" >
                      <input
                        type="tel"
                        className="form-select border border-gray-500 lg:w-full px-3 py-2"
                        id="phone"
                        placeholder="*Mobile Number"
                        name="phone"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-select border border-gray-500 lg:w-full px-3 py-2"
                        id="email*"
                        placeholder="*Email"
                        name="email"
                        required
                      />
                    </div>

                    <div className="mb-3 col-span-3 md:col-span-1">
                      <select
                        className="form-select border border-gray-500 text-gray-500 lg:w-full px-3 py-2"
                        id="jobType"
                        name="jobType"
                        required
                      >
                        <option value="">*Job Type</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Full-Time">Full-Time</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <select
                        className="form-select border border-gray-500 text-gray-500  lg:w-full px-3 py-2"
                        id="Applying For"
                        name="Applying For"
                        required
                      >
                        <option value="Project A">*Applying For</option>
                        <option value="Project A">Project A</option>
                        <option value="Project B">Project B</option>
                        <option value="Project C">Project C</option>
                      </select>
                    </div>

                    <div className="mb-3 col-span-3 md:col-span-1">
                      <input
                        type="file"
                        className="form-select text-gray-500 bg-white actual-file-input  lg:w-full border"
                        id="location"
                        placeholder="Attach Your Cv"
                        name="location"
                        required
                      />
                    </div>
                    <button
                      type="button"
                      className="focus:outline-none w-44  rounded-sm text-white bg-red-500 hover:bg-red-600  font-normal text-md px-2 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            {/* form end */}
          </div>
        </div>

        <div className="mx-14 pb-5" ref={contactRef}>
          <div className="mt-10 ">
            <p className="text-black text-5xl">CONTACT INFO</p>
          </div>

          <div class="lg:grid grid-cols-3 gap-4 text-xl border-b border-gray-400">
            <div class=" p-4 pt-7">
              Office<br></br> Address:
            </div>
            <div class=" p-4 ">
              <span className="text-xl"> Bengaluru:</span>
              <div className="">
                #25, 1st Main, AECS Layout, Ashwath Nagar, Bengaluru, 560094
              </div>
            </div>

            <div class=" p-4 text-xl">
              <span className="text-xl"> Delhi:</span>

              <div className="">
                A-10, Second Floor, Green Park, New Delhi, 110016
              </div>
            </div>
          </div>

          <div class="lg:grid grid-cols-3 gap-4 text-xl border-b border-gray-400 ">
            <div class="lg:p-4 pt-5 px-4">Email ID:</div>
            <div class="lg:p-4 px-4">Info@upfrontglobal.com</div>  
            {/* <Link href="mailto:Info@upfrontglobal.com"><li className='mt-5 lg:mt-0'>Info@upfrontglobal.com</li></Link> */}
            <div className="p-4"></div>
          </div>

          <div class="lg:grid grid-cols-3 lg:gap-4 text-xl">
            <div class="lg:p-4 px-4 pt-5">Phone Number:</div>
            {/* <div class="lg:p-4 px-4">+91 01234567890</div> */}
            <div className="p-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
