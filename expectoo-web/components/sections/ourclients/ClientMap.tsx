"use client";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import WorldMap from "./WorldMap";
import CountUp from "react-countup";

const ClientMap = () => {
  const [markerInfo, setMarkerInfo] = useState("Lotus,Germany");

  const client = markerInfo.split(",");

  return (
    <div className="bg-darkbg w-full">
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div className="h-auto px-4 py-6 md:p-20 2xl:p-0 2xl:py-20 ">
          <div className=" md:flex hidden">
            <div className="w-1/4 text-xl">
              <p className="text-primary text-xl md:text-3xl xl:text-6xl font-bold">
                Our{" "}
              </p>
              <p className="text-white text-xl md:text-3xl xl:text-6xl font-bold">
                Client
              </p>
              <div className="mt-16">
                <span className="flex space-x-1 items-center">
                  <GoDotFill className="text-primary text-xl" />
                  <p className="text-white xl:text-xl">{client[0]}</p>
                </span>
                <span className="flex space-x-1 items-center">
                  <GoDotFill className="text-primary text-xl" />
                  <p className="text-white xl:text-xl">{client[1]}</p>
                </span>
              </div>
            </div>
            <div className="md:w-3/4 ">
              <WorldMap setInfo={setMarkerInfo} />
            </div>
          </div>

          <div className="flex flex-col md:space-y-0 space-y-1 md:flex-row md:justify-between md:item-center">
            <h1 className="text-white text-xl md:text-3xl font-bold">
              Our Clients
            </h1>
            <div className="text-white md:text-base text-xs">
              <p>From captivating websites to dynamic web applications, we</p>
              <div className="md:flex md:justify-end">
                <p>breathe life into your digital presence...</p>
              </div>
            </div>
          </div>

          <div className="mt-20 xl:mt-40 justify-center  items-center flex w-full">
            <div className="md:h-60 h-44 flex w-full ">
              <div className="flex flex-col h-full justify-between">
                <div className="border-t-2 h-7 md:h-14 w-7 md:w-14 border-l-2 border-white"></div>
                <div className="border-b-2 h-7 md:h-14 w-7 md:w-14 border-l-2 border-white"></div>
              </div>

              <div className="flex w-full  justify-around items-center">
                <div className="flex-col items-center justify-center flex space-y-2">
                  <span className="text-white text-xl md:text-6xl font-bold">
                    <CountUp delay={2} end={43} />
                  </span>
                  <div className="md:border-l-4 border-l border-white h-4 md:h-6 "></div>
                  <p className="text-center text-xs md:text-2xl text-white  md:max-w-[200px]">
                    Countries our clients are in
                  </p>
                </div>
                <div className="flex-col justify-center items-center flex space-y-2">
                  <span className="text-white text-xl md:text-6xl font-bold">
                    {" "}
                    <CountUp delay={3} end={100} />%
                  </span>
                  <div className="md:border-l-4 border-l border-white h-4 md:h-6 "></div>
                  <p className="text-center text-xs md:text-2xl text-white  md:max-w-[200px]">
                    Countries our clients are in
                  </p>
                </div>
                <div className="flex-col justify-center items-center flex space-y-2">
                  <span className="text-white text-xl md:text-6xl font-bold">
                    {" "}
                    <CountUp delay={3} end={843} />+
                  </span>
                  <div className="md:border-l-4 border-l border-white h-4 md:h-6 "></div>
                  <p className="text-center text-xs md:text-2xl text-white  md:max-w-[200px]">
                    Countries our clients are in
                  </p>
                </div>
              </div>

              <div className="flex flex-col h-full justify-between">
                <div className="border-t-2 h-7 w-7 md:h-14 md:w-14 border-r-2 border-white"></div>
                <div className="border-b-2 h-7 w-7 md:h-14 md:w-14 border-r-2 border-white"></div>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-between mt-12">
            <img
              alt=""
              className="md:w-10 md:h-10  h-5 w-5"
              src="/flutter.svg"
            />
            <img
              alt=""
              className="md:w-12 md:h-12 h-7 w-7"
              src="/mountain.svg"
            />
            <img
              alt=""
              className="md:w-10 md:h-10  h-5 w-5"
              src="/unknown.svg"
            />
            <img
              alt=""
              className="md:w-12 md:h-12 h-6 w-6"
              src="/mountain.svg"
            />
            <img
              alt=""
              className="md:w-10 md:h-10  h-5 w-5"
              src="/flutter.svg"
            />
            <img
              alt=""
              className="md:w-10 md:h-10 w-5 h-5"
              src="/unknown.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMap;
