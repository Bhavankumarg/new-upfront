import React from "react";
import Image from "next/image";

const HealthWellbeing = () => {
  return (
    <>
      <div className="relative lg:w-1/3 xl:w-auto lg:absolute lg:-mt-28 lg:ms-10 bg-red-500">
        <Image
          src="/whatWeDo/tab-img.png"
          width={600}
          height={300}
          alt=""
          className="md:w-full xl:w-[500px] h-auto sm:w-auto"
        />
      </div>

      <div className="lg:flex lg:mt-20">
        <div className="lg:w-1/2 bg-[#FFE8EC] p-4 lg:pt-20">
          <p className="text-4xl bold font-normal pb-5 pt-3 mt-10">
            Health & Wellbeing
          </p>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-1.svg"
                width={100}
                height={100}
                alt=""
                className="w-12"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium">
                NUTRITION, SANITATION AND<br /> PERSONAL HYGIENE:
              </p>
            </div>
          </div>
          <p className="pt-3">
            We believe that everyday habits play a crucial role in maintaining
            good health. Through education and resources, we empower workers to
            make informed choices about nutrition, sanitation, and personal
            hygiene, promoting overall wellness in the workplace.
          </p>
        </div>
        <div className="lg:w-1/2 bg-[#FFE8EC] p-4 lg:pt-48">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-2.svg"
                width={100}
                height={100}
                alt=""
                className="w-10"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium">
                STRESS MANAGEMENT AND <br />MENTAL HEALTH:
              </p>
            </div>
          </div>

          <p className="pt-3">
            Recognising the importance of mental health for productivity and
            quality of life, Upfront creates avenues for open dialogue and life
            skills sessions aimed at stress management and mental health
            awareness.
          </p>
        </div>
      </div>

      <div className="lg:flex">
        <div className="lg:w-1/2 bg-[#FFE8EC] p-4">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-3.svg"
                width={100}
                height={100}
                alt=""
                className="w-14"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium">
                PRIMARY HEALTH AND<br/> NON-COMMUNICABLE DISEASES (NCDS):
              </p>
            </div>
          </div>

          <p className="pt-3">
            Facilitating regular awareness and screening programmes to detect
            and manage conditions that may affect workforce wellbeing.
          </p>
        </div>
        <div className="lg:w-1/2 bg-[#FFE8EC] p-4">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-4.svg"
                width={100}
                height={100}
                alt=""
                className="w-14"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium pt-2">
                WOMEN’S HEALTH AND WELLBEING:
              </p>
            </div>
          </div>

          <p className="pt-3">
            Women's health requires special attention. Through targeted
            initiatives, we raise awareness about menstrual health and hygiene,
            maternal health, family planning, and offer screenings for cancers
            related to women, ensuring comprehensive care for all women workers.
          </p>
        </div>
      </div>
    </>
  );
};

export default HealthWellbeing;
