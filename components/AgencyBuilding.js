import React from "react";
import Image from "next/image";

const AgencyBuilding = () => {
  return (
    <>
      <div className="">
        <Image
          src="/whatWeDo/tab-3.png"
          width={600}
          height={300}
          alt=""
          className="w-1/3 absolute -mt-28 ms-10"
        />
      </div>

      <div className="flex mt-20">
        <div className="w-1/2  bg-[#FFE8EC] p-4 pt-20">
          <p className="text-4xl bold font-normal pb-5 pt-3 mt-10">
            Agency Building for Women & Young Girls
          </p>

          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-7.svg"
                width={100}
                height={100}
                alt=""
                className="w-10"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium ">
                EQUIPPING WOMEN AND YOUNG GIRLS <br></br> WITH KNOWLEDGE AND
                LIFE SKILLS:
              </p>
            </div>
          </div>
          <p className="pt-3">
            Sharing knowledge with men and women that includes social and gender
            norms, empowering participants to challenge stereotypes and improve
            themselves and ask for what they deserve. Lifeskills training is
            also integrated with tools for their personal and professional
            development.
          </p>
        </div>
        <div className="w-1/2 bg-[#FFE8EC] p-4 pt-48">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-8.svg"
                width={100}
                height={100}
                alt=""
                className="w-10"
              />
            </div>
            <div className="flex flex-col px-3 ">
              <p className="text-md font-medium ">
                CHARTING CAREER <br></br>PROGRESSION PATHWAYS:
              </p>
            </div>
          </div>

          <p className="pt-3">
            Supporting the career advancement of women and young girls in the
            workplace through mentorship programs, skills development
            initiatives, and handholding to help women navigate their career
            paths with confidence. Additionally, Upfront works closely with
            employers to strengthen workplace policies and practices that
            promote gender equality and support professional growth irrespective
            of gender.
          </p>
        </div>
      </div>
    </>
  );
};

export default AgencyBuilding;
