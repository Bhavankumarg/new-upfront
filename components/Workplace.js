import React from "react";
import Image from "next/image";

const Workplace = () => {
  return (
    <>
      <div className="">
        <Image
          src="/whatWeDo/tab-5.png"
          width={600}
          height={300}
          alt=""
          className="w-1/3 absolute -mt-28 ms-10"
        />
      </div>

      <div className="flex mt-20">
        <div className="w-1/2  bg-[#FFE8EC] p-4 pt-20">
          <p className="text-4xl bold font-normal pb-5 pt-3 mt-10">
            Workplace/ Social Dialogues
          </p>

          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-11.svg"
                width={100}
                height={100}
                alt=""
                className="w-10"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium ">
                EFFECTIVE COMMUNICATION <br></br>& PROBLEM SOLVING:
              </p>
            </div>
          </div>
          <p className="pt-3">
            Effective communication is essential for resolving conflicts and
            addressing issues in the workplace. With the workforce, we emphasise
            the importance of clear, respectful communication and provide tools
            and strategies for effective problem-solving. A strong component
            focuses on empathy-building and leadership development, encouraging
            the workers to understand and support each other’s perspectives and
            take on leadership roles in promoting positive change.
          </p>
        </div>
        <div className="w-1/2 bg-[#FFE8EC] p-4 pt-48">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-12.svg"
                width={100}
                height={100}
                alt=""
                className="w-10"
              />
            </div>
            <div className="flex flex-col px-3 ">
              <p className="text-md font-medium ">
                RIGHTS & <br></br> RESPONSIBILITIES:
              </p>
            </div>
          </div>

          <p className="pt-3">
            Workforce should be aware of their rights and responsibilities in
            the workplace. Through workshops, training sessions, and
            informational resources, we educate the workforce about their legal
            rights under labor laws and human rights principles empowering the
            employees to advocate for themselves and others in the workplace.
          </p>
        </div>
      </div>
    </>
  );
};

export default Workplace;
