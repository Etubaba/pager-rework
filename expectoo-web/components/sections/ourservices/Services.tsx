"use client";
import QuoteBtn from "@/components/common/QuoteBtn";
import { useModalToggle } from "@/store";
import React, { useState } from "react";

const Services = () => {
  const [clicked, setClicked] = useState(1);

  const toggleModal = useModalToggle((state) => state.toggleModal);
  return (
    <div className="bg-darkbg w-full">
      <div className="2xl:max-w-7xl 2xl:mx-auto ">
        <div className=" px-4  md:pl-5 lg:pl-20 h-auto text-white py-6 md:py-20">
          <h1 className="md:hidden block text-[30px] my-4">Our Services</h1>

          <div className="md:hidden block text-xs mb-4">
            <p>Software Development</p>
          </div>
          <div className=" md:flex md:justify-between md:space-x-3">
            <div className="relative md:block hidden">
              <h1 className=" text-xl lg:text-4xl font-bold ">
                Our <br /> Services
              </h1>

              <div className="flex flex-col mt-3 space-y-4 absolute">
                {" "}
                <span
                  onMouseEnter={() => setClicked(1)}
                  className=" grow-bg  z-30 px-8 min-w-[300px] md:min-w-[400px] lg:min-w-[650px]  "
                >
                  {" "}
                  <p>Software Development</p>
                </span>
                <span
                  onMouseEnter={() => setClicked(2)}
                  className=" grow-bg z-30 px-8 min-w-[300px] md:min-w-[400px] lg:min-w-[650px]"
                >
                  {" "}
                  <p>IT Consultancy</p>
                </span>
                <span
                  onMouseEnter={() => setClicked(3)}
                  className=" grow-bg z-30 px-8 min-w-[300px] md:min-w-[400px] lg:min-w-[650px]"
                >
                  {" "}
                  <p>Software Training</p>
                </span>
                <span
                  onMouseEnter={() => setClicked(4)}
                  className=" grow-bg z-30 px-8 min-w-[300px] md:min-w-[400px] lg:min-w-[650px]"
                >
                  {" "}
                  <p>Software Maintaince</p>
                </span>
                <span
                  onMouseEnter={() => setClicked(5)}
                  className=" grow-bg z-30 px-8 min-w-[300px] md:min-w-[400px] lg:min-w-[650px]"
                >
                  {" "}
                  <p>Quality Assurance</p>
                </span>
              </div>
            </div>

            <div className="md:w-[50rem] md:h-[22rem] w-full relative">
              {clicked === 1 ? (
                <img
                  src="/img5.jpeg"
                  className=" object-fill w-full h-60
            md:h-full rounded-bl-xl rounded-tl-xl animate__slideInRight animate__animated"
                />
              ) : clicked === 2 ? (
                <img
                  src="/service2.png"
                  className=" object-fill w-full h-60 animate__slideInRight animate__animated
            md:h-full rounded-bl-xl rounded-tl-xl"
                />
              ) : clicked === 3 ? (
                <img
                  src="/service3.png"
                  className=" object-fill w-full h-60 animate__slideInRight animate__animated
            md:h-full rounded-bl-xl rounded-tl-xl"
                />
              ) : clicked === 4 ? (
                <img
                  src="/service4.png"
                  className=" object-fill w-full h-60 animate__slideInRight animate__animated
            md:h-full rounded-bl-xl rounded-tl-xl"
                />
              ) : (
                <img
                  src="/service5.png"
                  className=" object-fill w-full h-60 animate__slideInRight animate__animated
            md:h-full rounded-bl-xl rounded-tl-xl"
                />
              )}
              <div className=" w-full">
                {clicked === 1 ? (
                  <p className="mt-6  animate__fadeInUp animate__animated ml-5 md:ml-20 tracking-wider text-sm lg:text-xl ">
                    From captivating websites to dynamic web applications, we
                    breathe life into your digital presence by harnessing the
                    latest technologies to create seamless online experiences
                    that engage and inspire.
                  </p>
                ) : clicked === 2 ? (
                  <p className="mt-6  animate__fadeInUp animate__animated ml-5 md:ml-20 tracking-wider text-sm lg:text-xl ">
                    Suspendisse potenti. Vivamus bibendum diam non justo
                    eleifend, sed tincidunt justo tincidunt. Pellentesque
                    ullamcorper a odio nec bibendum. Vestibulum consectetur,
                    elit nec vestibulum malesuada.
                  </p>
                ) : clicked === 3 ? (
                  <p className="mt-6  animate__fadeInUp animate__animated ml-5 md:ml-20 tracking-wider text-sm lg:text-xl ">
                    Praesent luctus eros eget nisi tempus, nec aliquet purus
                    congue. Nulla facilisi. Aenean id enim sit amet purus
                    finibus vestibulum. Sed in tincidunt justo. Nulla id
                    malesuada ligula.
                  </p>
                ) : clicked === 4 ? (
                  <p className="mt-6  animate__fadeInUp animate__animated ml-5 md:ml-20 tracking-wider text-sm lg:text-xl ">
                    Suspendisse potenti. Vivamus bibendum diam non justo
                    eleifend, sed tincidunt justo tincidunt. Pellentesque
                    ullamcorper a odio nec bibendum.
                  </p>
                ) : (
                  <p className="mt-6  animate__fadeInUp animate__animated ml-5 md:ml-20 tracking-wider text-sm lg:text-xl ">
                    Vivamus bibendum diam non justo eleifend, sed tincidunt
                    justo tincidunt. Pellentesque ullamcorper a odio nec
                    bibendum. Suspendisse potenti.
                  </p>
                )}
                <div className="flex px-5 mt-5 md:mt-5 justify-end items-end">
                  {" "}
                  <QuoteBtn
                    onClick={() => toggleModal(true)}
                    text={"Get A Quote"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-56 flex justify-center items-center md:pr-16 ">
            <div className="bg-[url('/orangebg.png')] h-auto w-full md:h-80 bg-cover ">
              <div className=" w-full h-full p-4 md:p-10 bg-black/40">
                <div className="flex justify-between  items-center">
                  <p className="font-bold text-base md:text-3xl">
                    Digital Marketing
                  </p>
                  <QuoteBtn
                    onClick={() => toggleModal(true)}
                    text={"Get A Quote"}
                  />
                </div>

                <div className=" mt-12 text-white grid md:grid-cols-5 grid-cols-2 gap-5">
                  <div className=" flex flex-col items-center">
                    <img src="serviceicon1.png" className="w-28 h-28" />

                    <p className="text-xl">Google Ads</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="serviceicon5.png" className="w-28 h-28" />

                    <p className="text-xl text-center">SEO Service</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="serviceicon4.png" className="w-28 mt-1.5 h-28" />

                    <p className="text-xl text-center">SEO Copywriting</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="serviceicon3.png" className="w-28 h-28" />

                    <p className="text-xl text-center">
                      Social Media Marketing
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="serviceicon2.png" className="w-32 h-32" />

                    <p className="text-xl"> Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
