import React from "react";
import Image from "next/image";

const GenderEquality = () => {
  return (
    <>
      <div className="">
        <Image
          src="/whatWeDo/tab-2.png"
          width={600}
          height={300}
          alt=""
          className="lg:w-1/3 lg:absolute lg:-mt-28 lg:ms-10 md:w-full xl:w-[500px] h-auto sm:w-auto"
        />
      </div>

      <div className="lg:flex lg:mt-20">
        <div className="lg:w-1/2 w-full bg-[#FFE8EC] p-4 lg:pt-20">
          <p className="text-4xl bold font-normal pb-5 pt-3 mt-10">
            Gender Equality, Inclusion, and Diversity at Workplaces
          </p>

          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-5.svg"
                width={100}
                height={100}
                alt=""
                className="w-12"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium ">
                ADDRESSING SEXUAL HARASSMENT<br></br> AND GENDER-BASED VIOLENCE:
              </p>
            </div>
          </div>
          <p className="pt-3">
            We are committed to creating a safe and respectful work environment
            for all. Through comprehensive prevention, mitigation, and redressal
            mechanisms, Upfront actively works to address sexual harassment and
            gender-based violence in the workplace. This includes raising
            awareness, providing information and resources, conducting policy
            reviews, and implementing reformative practices to ensure
            accountability and support for the victims.
          </p>
        </div>
        <div className="lg:w-1/2 bg-[#FFE8EC] p-4 lg:pt-56">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-6.svg"
                width={100}
                height={100}
                alt=""
                className="w-12"
              />
            </div>
            <div className="flex flex-col px-3 ">
              <p className="text-md font-medium ">
                CREATING INCLUSIVE <br></br>WORKPLACES:
              </p>
            </div>
          </div>

          <p className="pt-3">
            We recognise the importance of making workplaces accessible and
            inclusive for everyone, regardless of caste, creed, gender identity,
            or physical ability. Our initiatives focus on removing barriers to
            participation and creating a culture of acceptance and belonging. We
            strive to foster an environment where all employees feel valued,
            respected, and empowered to contribute their unique perspectives and
            talents.
          </p>
        </div>
      </div>
    </>
  );
};

export default GenderEquality;
