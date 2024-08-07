import React from "react";
import Image from "next/image";

const Financial = () => {
  return (
    <>
      <div className="">
        <img
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/upfron-global/tab-imags/tab-4.png"
          width={1000}
          height={300}
          alt=""
          className="w-[900px]"
        />
      </div>

      <div className="lg:flex">
        <div className="lg:w-1/2   p-4 ">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-9.svg"
                width={100}
                height={100}
                alt=""
                className="w-10"
              />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-md font-medium ">
                Financial Planning and <br />
                Service Linkages
              </p>
            </div>
          </div>
          <p className="pt-3">
            Financial literacy is the foundation of financial wellbeing. Our
            workshops and resources on financial planning, budgeting, and saving
            equip employees with practical skills to manage their finances
            effectively. Whether it's setting financial goals, creating a
            budget, or building a savings plan, we provide the tools and
            guidance needed to make informed financial decisions. Upfront also
            bridges the gap between the workforce and a range of financial
            institutions and service providers, ensuring they have access to the
            products and resources they need to meet their financial goals, such
            as opening bank accounts, obtaining loans, and making investments to
            ensure their financial and overall wellbeing.
          </p>
        </div>
        <div className="lg:w-1/2  p-4">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <Image
                src="/whatWeDo/tab-img-10.svg"
                width={100}
                height={100}
                alt=""
                className="w-12"
              />
            </div>
            <div className="lg:flex flex-col px-3 ">
              <p className="text-md font-medium ">
                Digital Financial <br />
                Literacy
              </p>
            </div>
          </div>

          <p className="pt-3">
            In today's digital age, understanding how to navigate digital
            financial services is essential. We provide information and create
            awareness on digital financial literacy, covering topics such as
            online banking, mobile payments, and cybersecurity. By improving
            digital literacy skills, we empower our workforce to access and
            utilise digital financial services safely and efficiently.
          </p>
        </div>
      </div>
    </>
  );
};

export default Financial;
