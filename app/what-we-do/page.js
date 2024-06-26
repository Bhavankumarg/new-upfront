"use client";
import { useRef } from "react";
import Header from "@components/Header";
import Impact from "@components/Impact";
import OurKeyCommunities from "@components/OurKeyCommunities";
import Tab from "@components/Tab";
import { whatWeDoTabs } from "@utils/data";
import Image from "next/image";
import HealthWellbeing from "@components/health&wellbeing";
import ThematicDesktop from "@components/ThematicDesktop";
import ThematicMobile from "@components/ThematicMobile";
import WhatWeDoMobileAccordion from "../../components/WhatWeDoMobileAccordion";

const Page = () => {
  const overviewRef = useRef(null);
  const ourApproachRef = useRef(null);
  const resilienceRef = useRef(null);
  const keyCommunitiesRef = useRef(null);
  const thematicAreasRef = useRef(null);
  const impactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const getActiveTab = (tab) => {
    switch (tab) {
      case "Overview":
        scrollToSection(overviewRef);
        break;
      case "Approach":
        scrollToSection(ourApproachRef);
        break;
      case "Building Resilience of the Workforces":
        scrollToSection(resilienceRef);
        break;
      case "Key Communities":
        scrollToSection(keyCommunitiesRef);
        break;
      case "Thematic Areas":
        scrollToSection(thematicAreasRef);
        break;
      case "Impact":
        scrollToSection(impactRef);
      default:
        console.log(tab);
    }
  };

  return (
    <>
      <div className="">
        <div className="bg-[url('/whatWeDo/banner.png')] bg-cover h-[60vh] flex flex-col ps-16 pb-8 ">
          <Header />
          <h1 className="text-white text-6xl mt-auto">
            WHAT <br /> WE DO
          </h1>
        </div>
        <div className="hidden lg:block sticky top-0 bg-white shadow-md z-50">
          <Tab tabs={whatWeDoTabs} getActiveTab={getActiveTab} />
        </div>
        <div>
          <WhatWeDoMobileAccordion />
        </div>

        <div className="hidden lg:block">
          <div
            ref={overviewRef}
            className="max-w-screen-xl mx-auto lg:px-40 tracking-wide text-center space-y-4 p-5"
          >
            <p className="text-xl">
              Our journey began with narrowing our focus on one of the most
              vital components of the global economy—<br/>the workforce. We have been
              championing the wellbeing of the formal and informal workforce,
              especially women, by enhancing their skills,
              amplifying their voices, and fostering responsible business
              practices. As the world evolves, so does the need for a
              comprehensive approach to workforce wellbeing. Join us as we
              continue to pave the way for healthier, more empowered work
              environments across the globe.
            </p>

            <p className="font-semibold text-[#292929] text-xl" >
              Together, let us create a future where every individual thrives.
            </p>
          </div>

          <div
            ref={ourApproachRef}
            className="bg-[url('/whatWeDo/rectangle.png')] bg-no-repeat bg-cover flex flex-col items-center lg:p-10 p-3 text-center"
          >
            <h1 className="lg:text-6xl text-3xl">APPROACH</h1>
            <div className="bg-white lg:px-24 mt-10">
              <div className="w-full flex justify-center">
                <Image
                  src="/whatWeDo/ourApproach.png"
                  width={500}
                  height={500}
                  alt=""
                  className="mb-10 lg:w-3/4 w-full hidden lg:block"
                />
              </div>
              <p className="text-xl text-[#222222] mt-10 lg:p-0 p-5">
                Upfront prioritises the wellbeing of both the formal and
                informal workforce, placing their health and happiness at the
                core of its work, upholding its commitment to the community.
              </p>
              <p className="text-xl text-[#222222] lg:p-0 p-5 mt-3">
                We employ innovative, transformative, and sustainable practices
                tailored to be locally applicable, sensitive, and inclusive,
                effectively addressing specific needs and requirements to bring
                meaningful <b>impact</b>. To ensure impact at <b>scale</b>, Upfront focuses on
                moving from demonstration to orchestration. This strategic shift
                involves collaborating and partnering with others in the space,
                becoming part of forums and platforms, and leveraging collective
                strengths to achieve greater impact and scalability.
              </p>
              <p className="text-xl text-[#222222] lg:p-0 p-5 mt-3">
              Upfront also promotes sustainability by shaping and influencing leaders, investments, systems, and policies, ensuring that workforce wellbeing practices and principles are integrated at all levels of decision-making. Ensuring <b>sustainability</b> requires investment in the cause. Upfront designs innovative financing solutions to encourage such investments and generate tangible results, reinforcing its overall mission and vision for a healthy, wealthy, and thriving workforce.
              </p>
              <Image
                src="/whatWeDo/our_approach_mobile.png"
                width={500}
                height={500}
                alt=""
                className="mb-10 lg:w-3/4 w-full block lg:hidden"
              />
            </div>
          </div>

          <div
            ref={resilienceRef}
            className="bg-customLightGray lg:p-12 p-4 flex justify-center mb-12"
          >
            <div className="lg:w-2/3 space-y-5 text-center ">
              <h1 className="lg:text-6xl text-3xl pt-5">
                BUILDING RESILIENCE OF
                <br /> THE WORKFORCES
              </h1>
              <p className="text-[#222222] text-xl">
                Upfront focuses on fostering individual resilience by building
                agency, ensuring access to essential services, and enhancing
                structural and systemic capabilities through thought leadership,
                proactive actions, and targeted interventions, ultimately driving
                transformative change.
              </p>
              <Image
                src="/whatWeDo/PeopleResilience.png"
                width={600}
                height={400}
                alt=""
                className="w-full hidden lg:block"
              />
              <Image
                src="/whatWeDo/PeopleResilienceMobile.png"
                width={600}
                height={400}
                alt=""
                className="w-full block lg:hidden"
              />
            </div>
          </div>

          <div ref={keyCommunitiesRef}>
            <OurKeyCommunities />
          </div>

          <div>
            <ThematicMobile />
          </div>
          {/* <ThematicMobile  /> */}

          <div ref={thematicAreasRef}>
            <ThematicDesktop />
          </div>

          <div ref={impactRef}>
            <Impact />
          </div>
        </div>
      </div>
      {/* <Impact />   */}
    </>
  );
};

export default Page;
