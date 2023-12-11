import Image from "next/image";
import React from "react";
import QuoteBtn from "../common/QuoteBtn";
import { AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import Divider from "../common/Divider";

const Footer = () => {
  return (
    <div className="bg-[#101923] w-full">
      <div className="2xl:max-w-[130rem]  2xl:mx-auto">
        <div className="hidden md:flex items-center justify-between pt-16 md:px-16">
          <div>
            <Image
              width={90}
              height={42}
              alt="Expectoo Logo"
              src={"/expectoologo.png"}
              className=""
            />
          </div>

          <h1 className="text-white">Partner with the best</h1>

          <QuoteBtn text={"Contact Us"} />
        </div>
        <div className=" p-6 md:p-16 text-white">
          <div className="md:hidden block">
            <Image
              width={90}
              height={42}
              alt="Expectoo Logo"
              src={"/expectoologo.png"}
              className=""
            />
          </div>

          <div className="flex md:flex-row flex-col  md:justify-between md:items-center">
            <div className="flex flex-col space-y-2 mt-5">
              <p>OFFICE</p>

              <div className="max-w-[220px] ">
                <p className="md:text-base text-sm">
                  No 5, Engr Maxwell Adoki Street, Off Peter Odili Road, Port
                  Harcourt, River State Nigeria
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-2.5 min-w-[260px]">
              <p className="text-base mt-5">OFFICE</p>

              <p className="text-sm md:text-base">Blogs</p>
              <p className="text-sm md:text-base">E-mail address </p>
              <p className="text-sm md:text-base">Phone Number</p>
            </div>

            <div>
              <p className="text-xl md:block hidden mb-4">Social</p>

              <div className="flex space-x-2 mt-4 md:mb-0">
                <img
                  className="w-6 h-6"
                  src="/Instagram-Icon.png"
                  alt="instagram"
                />
                <AiOutlineTwitter className="text-2xl" />
                <BiLogoFacebook className="text-2xl" />
                <AiOutlineLinkedin className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="my-4">
            <Divider />
          </div>
          <div className="flex justify-end items-center">
            <div className="flex space-x-1 items-center justify-center">
              <p className="mt-0.5">©</p>
              <p className="md:text-lg text-sm">
                expectoo {new Date().getFullYear()}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
