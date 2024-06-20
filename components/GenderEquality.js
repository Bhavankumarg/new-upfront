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
          className="w-1/3 absolute -mt-28 ms-10"
        />
      </div>

      <div className="flex mt-20">
        <div className="w-1/2  bg-[#FFE8EC] p-4 pt-20">
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
                className="w-10"
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
            mechanism, Upfront actively works sexual harassment and gender-based
            violence in the workplace. This includes raising awareness,
            providing information and resources, conducting policy reviews, and
            implementing reformative practices to ensure accountability and
            support for victims.
          </p>
        </div>
        <div className="w-1/2 bg-[#FFE8EC] p-4 pt-56">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-6.svg"
                width={100}
                height={100}
                alt=""
                className="w-10"
              />
            </div>
            <div className="flex flex-col px-3 ">
              <p className="text-md font-medium ">
                CREATING INCLUSIVE <br></br>WORKPLACES:
              </p>
            </div>
          </div>

          <p className="pt-3">
            We recognize the importance of making our workplaces and workspaces
            accessible and inclusive for everyone, regardless of caste, creed,
            gender identity, or physical ability. Our initiatives focus on
            removing barriers to participation and creating a culture of
            acceptance and belonging. We strive to foster an environment where
            all employees feel valued, respected, and empowered to contribute
            their unique perspectives and talents.
          </p>
        </div>
      </div>
    </>
  );
};

export default GenderEquality;
