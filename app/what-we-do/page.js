  "use client"
  import Header from "@components/Header"
  import Impact from "@components/Impact"
  import OurKeyCommunities from "@components/OurKeyCommunities"
  import Tab from "@components/Tab"
  import TabFunction from "@components/TabFunction"
  import { whatWeDoTabs } from "@utils/data"
  import Image from "next/image"
  import { Container } from "postcss"
  import HealthWellbeing from "@components/health&wellbeing";
  import GenderEquality from "@components/GenderEquality";
  import AgencyBuilding from "@components/AgencyBuilding";
  import Financial from "@components/Financial&DigitalInclusion";
  import Workplace from "@components/Workplace";
  import SocialProtection from "@components/SocialProtection"

  const page = () => {
    const getActiveTab = (tab) => {
      console.log(tab)
    }
    return (
      <>
        <div className="bg-[url('/whatWeDo/banner.png')] bg-cover h-[60vh] flex flex-col ps-16 pb-8">
          <Header />
          <h1 className="text-white text-6xl mt-auto">
            WHAT <br /> WE DO
          </h1>
        </div>
        <Tab tabs={whatWeDoTabs} getActiveTab={getActiveTab} />

        <div className="max-w-screen-xl mx-auto lg:px-40 py-16 tracking-wide text-center space-y-4 p-5">
          {/* <h1 className="text-5xl">OVERVIEW</h1> */}
          <p className="text-xl">
            Our journey began with narrowing down the focus on one of the most
            vital components of the global economy—the workforce. We have been
            championing the wellbeing of the formal and informal workforce,
            especially women workforce, through empowerment by enhancing their
            skills, amplifying their voices, and fostering responsible business
            practices.
          </p>
          <p>
            As the world evolves, so does the need for a comprehensive approach to
            the wellbeing of the workforce. Join us as we continue to pave the way
            for healthier, more empowered work environments across the globe.
          </p>
          <p className="font-semibold text-[#292929]">
            Together let us create a future where every individual thrives.
          </p>
        </div>

        <div className="bg-[url('/whatWeDo/rectangle.png')] bg-no-repeat bg-cover flex flex-col items-center lg:p-20 p-3 text-center mb-12">
          <h1 className="text-5xl">OUR APPROACH</h1>
          <div className="bg-white py-10 lg:px-24 mt-10">

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
              Upfront prioritises the wellbeing of the formal and informal
              workforce, placing their health and happiness at the core of its
              work, upholding its commitment to the community. We employ
              innovative, transformative, and sustainable practices tailored to be
              locally applicable, sensitive, and inclusive, addressing specific
              needs and requirements effectively and helping us bring meaningful{" "}
              <span className="font-semibold">Impact</span>. To ensure impact at{" "}
              <span className="font-semibold">Scale</span>, Upfront focuses on
              moving from demonstration to orchestration. This strategic shift
              involves collaborating and partnering with others working in the
              space, becoming part of forums and platforms, thereby leveraging
              collective strengths to achieve greater impact and scalability.
              Additionally, it focuses on promoting Sustainability by shaping and
              influencing leaders, investments, systems, and policies, ensuring
              that workforce wellbeing practices and principles are integrated at
              all levels of decision-making. Ensuring{" "}
              <span className="font-semibold">sustainability</span> also needs
              investment for the cause, Upfront also designs innovative financing
              solutions to encourage investments and generate tangible results,
              reinforcing its overall mission and vision for a healthy, wealthy
              and thriving workforce.
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

        <div className="bg-customLightGray lg:p-12 p-4 flex justify-center mb-12">
          <div className="lg:w-2/3 space-y-5 text-center ">
            <h1 className="text-5xl pt-5">BUILDING RESILIENCE OF<br className="hidden lg:block"/> THE WORKFORCES</h1>
            <p className="text-[#222222] text-xl">
              Upfront focuses on fostering individual resilience by building
              agency, ensuring access to essential services, and enhancing
              structural and systemic capabilities through thought leadership,
              proactive action, and targeted interventions, ultimately driving
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
        <OurKeyCommunities />

  {/* THEMATIC AREAS */}

        <div className=" mt-10 px-10 ">
          <p className="text-center text-6xl pb-10 text-[#222222]">THEMATIC AREAS</p>
          <div>
            <div className=" border-0 border-gray-200 dark:border-gray-700 ">
              <ul
                className="flex flex-wrap -mb-px text-md font-medium  text-center ms-3  container w-screen mt-4"
                id="default-tab"
                data-tabs-toggle="#default-tab-content"
                role="tablist"
              >
                <li className="me-2 flex-1 mr-2" role="presentation" id="talkbubble">
                  <button
                    className="inline-block p-3 text-customBlack "
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Health & <br></br>Wellbeing
                  </button>
                </li>
                
                <li className="me-2 flex-1 mr-2" role="presentation" id="talkbubble">
                  <button
                    className="inline-block p-3 text-customblack "
                    id="genter_equality-tab"
                    data-tabs-target="#genter_equality"
                    type="button"
                    role="tab"
                    aria-controls="genter_equality"
                    aria-selected="false"
                  >
                    Gender Equality,<br></br> Inclusion, and Diversity
                  </button>
                </li>
                <li className="me-2 flex-1 mr-2" role="presentation"id="talkbubble">
                  <button
                    className="inline-block p-3 text-customBlack "
                    id="settings-tab"
                    data-tabs-target="#settings"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected="false"
                  >
                    Agency Building for<br></br> Women & Young Girls
                  </button>
                </li>
                <li role="presentation" className="flex-1 mr-2" id="talkbubble">
                  <button
                    className="inline-block p-3 text-customBlack "
                    id="contacts-tab"
                    data-tabs-target="#contacts"
                    type="button"
                    role="tab"
                    aria-controls="contacts"
                    aria-selected="false"
                  >
                    Financial & <br></br>Digital Inclusion
                  </button>
                </li>
                <li className="me-2 flex-1 mr-2" role="presentation" id="talkbubble">
                  <button
                    className="inline-block p-3 text-customBlack "
                    id="workplace-tab"
                    data-tabs-target="#workplace"
                    type="button"
                    role="tab"
                    aria-controls="workplace"
                    aria-selected="false"
                  >
                    Workplace/<br/> Social Dialogues
                  </button>
                </li>

                <li className="me-2 flex-1 mr-2" role="presentation" id="talkbubble">
                  <button
                    className="inline-block p-3 text-customBlack "
                    id="social_protection-tab"
                    data-tabs-target="#social_protection"
                    type="button"
                    role="tab"
                    aria-controls="social_protection"
                    aria-selected="false"
                  >
                    Social<br/> Protection 
                  </button>
                </li>

              </ul>
            </div>
      
            <div id="default-tab-content ">
              <div
                className="hidden p-4 rounded-lg  relative mt-28"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
              <HealthWellbeing/>
                </div>

              <div
                class="hidden p-4 rounded-lg  relative mt-28"
                id="genter_equality"
                role="tabpanel"
                aria-labelledby="genter_equality-tab"
              >
                

                <GenderEquality/>
              </div>
              <div
                class="hidden p-4 rounded-lg  relative mt-28"
                id="settings"
                role="tabpanel"
                aria-labelledby="settings-tab"
              >
                
                <AgencyBuilding/>
              </div>

              <div
                class="hidden p-4 rounded-lg  relative mt-28"
                id="contacts"
                role="tabpanel"
                aria-labelledby="contacts-tab"
              >
              
                <Financial/>
              </div>

              <div
                class="hidden p-4 rounded-lg  relative mt-28"
                id="workplace"
                role="tabpanel"
                aria-labelledby="workplace-tab"
              >
              
                <Workplace/>
              </div>

              <div
                class="hidden p-4 rounded-lg  relative mt-28"
                id="social_protection"
                role="tabpanel"
                aria-labelledby="social_protection-tab"
              >
              
                <SocialProtection/>
                
              </div>
            </div>
          </div>
        </div>

        <Impact />

        {/* <TabFunction /> */}
      </>
    )
  }

  export default page
