import React from "react"
import Image from "next/image"

const HealthWellbeing = () =>{
    return (
<>
<div className="">
              <Image
                src="/whatWeDo/tab-img.png"
                width={600}
                height={300}
                alt=""
                className="w-1/3 absolute -mt-28 ms-10"
              />
              </div>
             

              <div className="flex mt-20">
                <div className="w-1/2  bg-[#FFE8EC] p-4 pt-20 ">
                  <p className="text-4xl bold font-normal pb-5 pt-3 mt-10">
                    Health & Wellbeing
                  </p>
                
                  <div className="flex flex-row ">
                    <div className="flex flex-col">
                      <Image
                        src="/whatWeDo/tab-img-1.svg"
                        width={100}
                        height={100}
                        alt=""
                        className="w-10"
                      />
                    </div>
                    <div className="flex flex-col px-3">
                      <p className="text-md font-medium ">
                        NUTRITION, SANITATION &<br></br> PERSONAL HYGIENE:
                      </p>
                    </div>
                  </div>
                  <p className="pt-3">
                    We believe that everyday habits play a crucial role in
                    maintaining good health. Through education and resources, we
                    empower the workers to make informed choices about
                    nutrition, sanitation, and personal hygiene and the
                    workplace systems to promote overall wellness.
                  </p>
                </div>
                <div className="w-1/2 bg-[#FFE8EC] p-4 pt-48">
                  <div className="flex flex-row ">
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
                      <p className="text-md font-medium ">
                        STRESS MANAGEMENT AND <br></br>MENTAL HEALTH:
                      </p>
                    </div>
                  </div>

                  <p className="pt-3">
                    Recognizing the importance of mental health to ensure
                    productivity and quality of life for the workforce, Upfront
                    creates avenues for open dialogue and life skills sessions
                    aimed at stress management and mental health awareness.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-1/2  bg-[#FFE8EC] p-4">
                  <div className="flex flex-row ">
                    <div className="flex flex-col">
                      <Image
                        src="/whatWeDo/tab-img-3.svg"
                        width={100}
                        height={100}
                        alt=""
                        className="w-10"
                      />
                    </div>
                    <div className="flex flex-col px-3">
                      <p className="text-md font-medium ">
                        PRIMARY HEALTH & NON-<br></br>COMMUNICABLE DISEASES
                        (NCDS):
                      </p>
                    </div>
                  </div>

                  <p className="pt-3">
                    Facilitating regular awareness and screening programs to
                    detect and manage conditions that may affect the workforce
                    well-being.
                  </p>
                </div>
                <div class="w-1/2  bg-[#FFE8EC] p-4">
                  <div className="flex flex-row ">
                    <div className="flex flex-col">
                      <Image
                        src="/whatWeDo/tab-img-4.svg"
                        width={100}
                        height={100}
                        alt=""
                        className="w-10"
                      />
                    </div>
                    <div className="flex flex-col px-3">
                      <p className="text-md font-medium ">
                        WOMEN’S HEALTH AND<br></br> WELLBEING: (NCDS):
                      </p>
                    </div>
                  </div>

                  <p className="pt-3">
                    Women’s health requires special attention. Through targeted
                    initiatives, we raise awareness about menstrual health and
                    hygiene, maternal health, family planning, and offer
                    screenings for cancers related to women, ensuring
                    comprehensive care for all women workers.
                  </p>
                </div>
              </div>
</>
    )
}

export default HealthWellbeing