"use client";
import React, { useEffect } from "react";
import FlareCursor from "../common/Cursor";

//import cursorEffects from "cursor-effects";

import Header from "../header/Header";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    const myDiv = document.getElementById("cursor-img") as HTMLElement;

    myDiv.addEventListener("mouseover", () => {
      document.body.style.cursor = "url(/img4.jpeg), auto";
    });
    myDiv.addEventListener("mouseout", () => {
      document.body.style.cursor = "default";
    });
  }, []);
  return (
    <section className="w-full bg-[url('/herobg.jpeg')]   bg-cover">
      <div className="bg-black/70 w-full">
        <div className="2xl:max-w-7xl 2xl:mx-auto">
          <div className="h-auto 2xl:h-[70vh] w-full  ">
            <div className="w-full h-full md:py-10  px-8 py-4 ">
              <Header />

              <div className=" xl:max-w-4xl 2xl:max-w-7xl  mt-20 text-white tracking-widest  font-bold ">
                <p className="md:text-[2.7rem]  xl:md:text-[3.4rem] 2xl:text-[4rem]">
                  We are the best{" "}
                  <b id="cursor-img" className="text-primary underline ">
                    Recruitment, <br className="hidden md:block" />
                    Software
                  </b>{" "}
                  development,
                  <br className="hidden md:block" /> and{" "}
                  <b className="text-primary underline cursor-img">
                    IT Training
                  </b>
                  company.
                </p>
              </div>

              <div className="flex 2xl:hidden justify-center md:justify-end md:items-end  mt-20 2xl:mt-80">
                <div className="flex space-x-10 items-center">
                  <Image
                    width={90}
                    height={42}
                    alt="Expectoo Logo"
                    src={"/clishalogo.png"}
                    className=""
                  />
                  <Image
                    width={90}
                    height={42}
                    alt="Expectoo Logo"
                    src={"/vendologo.png"}
                    className=""
                  />
                </div>
              </div>

              <div className="2xl:flex hidden justify-center md:justify-end md:items-end  mt-20 2xl:mt-80">
                <div className="flex space-x-10 items-center">
                  <img
                    className="w-[150px] h-14"
                    alt="Expectoo Logo"
                    src="/clishalogo.png"
                  />
                  <img
                    className="w-[150px] h-14"
                    alt="Expectoo Logo"
                    src="/vendologo.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
