"use client";

import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const OurProjects = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="w-full">
      <div className="2xl:max-w-7xl 2xl:mx-auto w-full">
        <div className="bg-white py-10 xl:py-20  relative">
          <div className="w-full h-6 md:h-10 top-[50%] lg:h-14 2xl:hidden items-center z-0 md:top-[50%] absolute bg-primary/20"></div>
          <h1 className=" hidden lg:inline-block font-bold leading-4  absolute z-0 left-[58%] top-[54%] text-8xl  text-black/40 ">
            0{count}
          </h1>

          <div className="md:flex items-center  hidden  justify-center ">
            <div className="xl:text-8xl text-7xl absolute  left-0 tracking-widest z-10">
              <h1 className="font-bold rotate-[270deg]">
                Our <br />{" "}
                <span className="text-primary text-8xl ">Projects</span>
              </h1>
            </div>

            <div className="w-[20%] "></div>

            <div className="flex w-full justify-center space-x-10 items-center ">
              <div className="relative w-[22rem] h-[28rem]  ">
                {count === 1 ? (
                  <img
                    className="absolute z-20 h-[94%] w-[92%] top-3 left-4"
                    src="/display1.webp"
                    alt="bigIpad"
                  />
                ) : (
                  <img
                    className="absolute kkk z-20 h-[94%] w-[92%] top-3 left-4 ani"
                    src="/laptopdisplay2.svg"
                    alt="bigIpad"
                  />
                )}
                <img src="/ipad-frame.png" className=" w-full h-full " alt="" />
              </div>

              <div className="flex flex-col space-y-5 items-center">
                <div className=" relative w-[14rem]  h-[8rem]">
                  {count === 2 ? (
                    <img
                      className="absolute object-cover z-20 h-[76%] w-[83%] top-1 left-5"
                      src="/ipaddisplay2.svg"
                      alt="bigIpad"
                    />
                  ) : (
                    <img
                      className="absolute object-cover z-20 h-[76%] w-[83%] top-1 left-5"
                      src="/display-phone.svg"
                      alt="bigIpad"
                    />
                  )}
                  <img
                    src="/laptop-frame.png"
                    className=" w-full h-full "
                    alt=""
                  />
                </div>{" "}
                <div className=" relative   w-[7rem]  h-[10rem]">
                  {count === 1 ? (
                    <img
                      className="absolute z-20 h-[94%] w-[92%] top-1 left-1 "
                      src="/display1.webp"
                      alt="bigIpad"
                    />
                  ) : (
                    <img
                      className="absolute object-cover z-20 h-[96%] w-[92%] top-1 left-1 "
                      src="/laptopdisplay2.svg"
                      alt="bigIpad"
                    />
                  )}
                  <img
                    src="/ipad-frame.png"
                    className="  w-full h-full "
                    alt=""
                  />
                </div>
                <div className="flex space-x-8 items-center">
                  <div
                    onClick={() => {
                      if (count == 1) return;
                      setCount((prev) => prev - 1);
                    }}
                  >
                    <BsArrowLeft className="text-4xl text-gray-400 cursor-pointer" />
                  </div>

                  <p>Order</p>
                  <div
                    onClick={() => {
                      if (count >= 2) return;
                      setCount((prev) => prev + 1);
                    }}
                  >
                    {" "}
                    <BsArrowRight className="text-4xl text-gray-400 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden block px-4">
            <div className="flex space-x-2 px-4 ">
              <p className="text-darkbg font-bold text-3xl">Our </p>
              <p className="text-primary font-bold text-3xl">Projects</p>
            </div>

            <div className="flex space-x-3 mt-10 justify-center">
              <div className="w-60 h-80 relative">
                {count === 1 ? (
                  <img
                    className="absolute z-20 h-[96%] w-[96%] left-1 top-2"
                    src="/display1.webp"
                    alt="bigIpad"
                  />
                ) : (
                  <img
                    className="absolute z-20 h-[96%] w-[96%] left-1 top-2"
                    src="/laptopdisplay2.svg"
                    alt="bigIpad"
                  />
                )}
                <img className="w-full h-full" src="/ipad-frame.png" />
              </div>
            </div>

            <div className="flex space-x-8 mt-10 justify-center items-center">
              <div
                onClick={() => {
                  if (count == 1) return;
                  setCount((prev) => prev - 1);
                }}
              >
                <BsArrowLeft className="text-4xl text-gray-400 cursor-pointer" />
              </div>

              <p>Order</p>
              <div
                onClick={() => {
                  if (count >= 2) return;
                  setCount((prev) => prev + 1);
                }}
              >
                {" "}
                <BsArrowRight className="text-4xl text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
