"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModalToggle } from "@/store";

const TextImage = () => {
  const toggleModal = useModalToggle((state) => state.toggleModal);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const { innerHeight } = window;

    // zoom-in
    gsap.from("#zoom-in h2", {
      scale: 1,
      stagger: 0.25,
      duration: 1,
      scrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3,
      },
    });
  }, []);
  useEffect(() => {
    const { innerHeight } = window;

    gsap.to("#zoom-out h2", {
      scale: 100,
      stagger: 0.25,
      duration: 3,
      scrollTrigger: {
        trigger: "#zoom-out",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3,
      },
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <section
        className="bg-white md:flex items-center justify-center hidden"
        id="zoom-out"
      >
        <h2 className="text-ani hidden md:flex">expectoo</h2>
      </section>

      <section
        id="zoom-in"
        className=" animate__fadeIn animate__animated hidden md:block"
      >
        <div className="w-full bg-[url('/expectoobg.svg')]  bg-no-repeat bg-cover  p-40 h-screen  leading-[60px]  tracking-[0.5rem] text-white flex  justify-start ">
          <h2 className="animate__fadeInUp animate__animated   text-6xl font-[700]">
            You are in good company here, Start with a{" "}
            <b
              className="undeline cursor-pointer"
              onClick={() => toggleModal(true)}
            >
              free quote
            </b>
          </h2>
        </div>
      </section>

      <div className=" bg-[url('/orangebg.png')] md:hidden block   bg-no-repeat bg-cover  w-full p-10 text-white font-bold">
        <p className="text-lg ">You are in good company </p>
        <p className="text-lg ">Start with a free qoute</p>
      </div>
    </div>
  );
};

export default TextImage;
