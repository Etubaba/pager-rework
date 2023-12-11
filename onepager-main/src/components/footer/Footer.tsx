'use client';
import Image from 'next/image';
import React from 'react';

import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiFillInstagram,
} from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import PageSection from '../pageSection';

import Logo from '@/assets/img/logo.png';
import Btn from '../elements/btn';

const icons = [
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  BiLogoFacebook,
];

const Footer = () => {
  return (
    <PageSection backgroundColor=" bg-BLACK_01">
      <div className=" grid grid-cols-3">
        <Image src={Logo} alt="logo" className="w-28 rounded-md cursor-auto" />
        <p className=" text-white text-center">Partner with the best</p>
        <div className="text-end">
          <Btn className=" inline-block ">Contact us</Btn>
        </div>

        <div className=" mt-9 ">
          <p className=" text-xl text-white">Office</p>
          <p className=" text-white w-[70%] mt-2">
            No 5, Engr Maxwell Adoki Street, Off Peter Odili Road, Port
            Harcourt, River State Nigeria
          </p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className=" w-[10rem]">
            <p className=" text-xl text-white inline-block">Office</p>
            <ul className=" text-white mt-2 space-y-2">
              <li>Blogs</li>
              <li>E-mail address </li>
              <li>Phone Number</li>
            </ul>
          </div>
        </div>

        <div className=" mt-4 flex items-end flex-col">
          <div className="w-[10rem]">
            <p className=" text-xl text-white">Social</p>
            <div className="flex mt-2 space-x-2 items-center">
              {icons.map((Icon, index) => (
                <span
                  key={index}
                  className=" text-3xl text-white cursor-pointer"
                >
                  <Icon />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" border mt-4"></div>
      <p className=" text-white text-end mt-3">
        © expectoo 2023. All rights reserved
      </p>
    </PageSection>
  );
};

export default Footer;
