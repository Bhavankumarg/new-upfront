import React from "react";
import Image from "next/image";

const SocialProtection = () => {
  return (
    <>
      <div className="">
        <Image
          src="/whatWeDo/tab-6.png"
          width={600}
          height={300}
          alt=""
          className="lg:w-1/3 lg:absolute lg:-mt-28 lg:ms-10"
        />
      </div>

      <div className="lg:flex lg:mt-20">
        <div className="lg:w-1/2  bg-[#FFE8EC] p-4 lg:pt-20">
          <p className="text-4xl bold font-normal pb-5 pt-3 lg:mt-10">
            Social Protection
          </p>

          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-13.svg"
                width={100}
                height={100}
                alt=""
                className="w-10"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium ">AWARENESS & ACCESS:</p>
            </div>
          </div>
          <p className="pt-5">
            Social Protection scheme ensures the vulnerable and the workforce
            with the safety net. Improving awareness and access ensures that the
            workers do not fall through the cracks and that everyone receives
            the assistance they need when facing challenges. Through awareness
            campaigns, workshops, and information sessions, we empower our
            workforce with knowledge about available support services and how to
            access them.
          </p>
        </div>
        <div className="lg:w-1/2 bg-[#FFE8EC] p-4 lg:pt-48">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-14.svg"
                width={100}
                height={100}
                alt=""
                className="w-10"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium ">UNIVERSAL HELP DESK:</p>
            </div>
          </div>

          <p className="pt-5">
            We believe in providing easy access to information and assistance
            for the workforce may not be enough in some cases. Setting up
            Universal Help Desk in partnership with the workplaces/systems
            serves as a central point of contact for inquiries, support
            requests, and guidance on social protection services ensuring
            quality and sustainable impact.
          </p>
        </div>
      </div>
      <div className=" bg-[#FFE8EC] p-4">
        <div className="flex flex-row ">
          <div className="flex flex-col">
            <Image
              src="/whatWeDo/tab-img-15.svg"
              width={100}
              height={100}
              alt=""
              className="w-10"
            />
          </div>
          <div className="flex flex-col px-3 lg:w-1/2">
            <p className="text-md font-medium ">MAPPING AND RESEARCH:</p>
          </div>
        </div>

        <p className="lg:w-1/2 pt-5">
          Understanding the needs and vulnerabilities of the workforce is
          essential for designing effective social protection interventions.
          Upfront also conducts mapping exercises and research studies to
          identify gaps in coverage, assess the effectiveness of existing
          programs, and gather insights into emerging needs and trends with
          different workforces/groups. By leveraging data and research findings,
          we can tailor our interventions to better meet the needs of our
          employees and address systemic challenges.
        </p>
      </div>
    </>
  );
};

export default SocialProtection;
