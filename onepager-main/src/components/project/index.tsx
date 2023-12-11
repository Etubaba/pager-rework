'use client';
import PageSection from '../pageSection';
import LapTop from '../devices/laptop';
import Tablet from '../devices/tablet';
import Phone from '../devices/phone';
import LeftArrowSvg from '@/assets/svg/leftArrow';
import RightArrowSvg from '@/assets/svg/rightArrow';
import { useRef } from 'react';

const Projects = () => {
  const laptopRef = useRef<any>(null);
  const phoneRef = useRef<any>(null);
  const tabletRef = useRef<any>(null);
  const count = useRef<number>(0);

  const sliders = () => {
    const sliders = [laptopRef, tabletRef, phoneRef];
    for (let slider of sliders) {
      slide(slider);
    }
  };

  function slide(ele: any) {
    const slideWidth = ele.current.clientWidth;
    ele.current.style.transform = `translateX(-${
      slideWidth * count.current
    }px)`;
  }

  function goToNextSlide() {
    count.current++;
    if (count.current >= laptopRef.current.children.length) {
      count.current = 0;
    }
    sliders();
  }

  function goToPrevSlide() {
    count.current--;
    if (count.current < 0) {
      count.current = laptopRef.current.children.length - 1;
    }
    sliders();
  }

  return (
    <PageSection>
      <div className="flex justify- items-center">
        <div className="">
          <h1 className="text-[6.5rem] font-semibold rotate-[-90deg] leading-[1] translate-x-[-1rem]">
            Our <br /> <span className=" text-PINK_01">Projects</span>
          </h1>
        </div>
        <div className="flex flex-1 space-x-3">
          <Tablet sharedRef={tabletRef} />
          <div className=" flex flex-col justify-center items-center">
            <div className="mb-8">
              <LapTop sharedRef={laptopRef} />
            </div>
            <div className="flex justify-center">
              <Phone sharedRef={phoneRef} />
            </div>
            <div className="flex items-center space-x-8 text- mt-8">
              <span
                onClick={goToPrevSlide}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-gray-800/30 hover:bg-gray-800/60 cursor-pointer"
              >
                <LeftArrowSvg className="w-2" />
                <span className="sr-only">Previous</span>
              </span>
              <span
                onClick={goToNextSlide}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-gray-800/30 hover:bg-gray-800/60 cursor-pointer"
              >
                <RightArrowSvg className="w-2" />
                <span className="sr-only">Next</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Projects;
