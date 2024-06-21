import React, { useState, useRef } from "react";
import HealthWellbeing from "./health&wellbeing";
import GenderEquality from "./GenderEquality";
import AgencyBuilding from "./AgencyBuilding";
import Financial from "../components/Financial&DigitalInclusion";
import Workplace from "./Workplace";
import SocialProtection from "./SocialProtection";
import Impact from "./Impact";

const ThematicMobile = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  const accordionData = [
    {
      title: "Overview",
      component: <HealthWellbeing />,
    },
    {
      title: "Our Approach",
      component: <GenderEquality />,
    },
    {
      title: "Building Resilience of the workforces",
      component: <AgencyBuilding />,
    },
    {
      title: "Our Key Communities",
      component: <Financial />,
    },
    {
      title: "Thematic Areas",
      component: <Workplace />,
    },
    {
      title: "Impact",
      component: <SocialProtection />,
    },
  ];

  return (
    <div className="pt-10 block lg:hidden">
      <div id="accordion-collapse" data-accordion="collapse">
        {accordionData.map((item, index) => (
          <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
            <h2 id={`accordion-collapse-heading-${index + 1}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-400 focus:ring-0 focus:ring-red-50 dark:focus:ring-red-800 dark:border-gray-100 dark:text-gray-400 gap-3 ${
                  activeIndex === index ? "bg-gray-400 text-white" : "hover:bg-gray-400 hover:text-white dark:hover:bg-red-800"
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`accordion-collapse-body-${index + 1}`}
              >
                <span>{item.title}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 ${activeIndex === index ? "rotate-180" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index + 1}`}
              className={`${activeIndex === index ? "" : "hidden"}`}
              aria-labelledby={`accordion-collapse-heading-${index + 1}`}
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                {item.component}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThematicMobile;
