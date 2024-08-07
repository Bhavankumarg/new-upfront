import React from "react";
import Image from "next/image";

const Workplace = () => {
  return (
    <>
      <div className="">
        <img
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/tab-imags/tab-5.png"
          width={1000}
          height={300}
          alt=""
          className="w-[900px]"
        />
      </div>

      <div className="lg:flex ">
        <div className="lg:w-1/2 p-4">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-11.svg"
                width={100}
                height={100}
                alt=""
                className="w-14"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium ">
                Effective Communication <br />& Problem Solving
              </p>
            </div>
          </div>
          <p className="pt-3">
            Effective communication is essential for resolving conflicts and
            addressing issues in the workplace. We emphasise the importance of
            clear, respectful communication and provide tools and strategies for
            effective problem-solving. A significant part of our efforts focus
            on empathy-building and leadership development, encouraging the
            workforce to understand and support each other's perspectives and
            take on leadership roles in promoting positive change.
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="flex flex-row pt-4">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-12.svg"
                width={100}
                height={100}
                alt=""
                className="w-14"
              />
            </div>
            <div className="lg:flex flex-col px-3">
              <p className="text-md font-medium ">
                Rights & <br />
                Responsibilities
              </p>
            </div>
          </div>

          <p className="pt-3">
            The workforce should be aware of its rights and responsibilities in
            the workplace. Through workshops, training sessions, and
            informational resources, we educate the workforce about their legal
            rights under labour laws and human rights principles, empowering the
            employees to advocate for themselves and others in the workplace.
          </p>
        </div>
      </div>
    </>
  );
};

export default Workplace;
