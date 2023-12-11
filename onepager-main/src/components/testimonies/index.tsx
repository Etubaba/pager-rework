'use client';
import Image from 'next/image';
import PageSection from '../pageSection';
import gallery_01 from '@/assets/img/gallery/gallery_01.png';
import LeftArrowSvg from '@/assets/svg/leftArrow';
import RightArrowSvg from '@/assets/svg/rightArrow';
import { testimoniesData } from '@/data';
import { useRef } from 'react';

const Testimonies = () => {
  const testimoniesRef = useRef<any>(null);

  const count = useRef<number>(0);

  function slide() {
    const slideWidth = testimoniesRef.current.clientWidth;
    testimoniesRef.current.style.transform = `translateX(-${
      slideWidth * count.current
    }px)`;
  }

  function goToNextSlide() {
    count.current++;
    if (count.current >= testimoniesRef.current.children.length) {
      count.current = 0;
    }
    slide();
  }

  function goToPrevSlide() {
    count.current--;
    if (count.current < 0) {
      count.current = testimoniesRef.current.children.length - 1;
    }
    slide();
  }

  return (
    <PageSection>
      <div className="flex space-x-9 py-20">
        <div className=" flex justify-center items-center relative">
          <h1 className="font-medium text-4xl rotate-[-90deg] translate-y-10 text-PINK_01">
            {"Client's feedback"}
          </h1>
        </div>
        <div className=" w-[70%]">
          <div className="overflow-hidden w-full">
            <div
              ref={testimoniesRef}
              className="testimonies__slider flex  w-full"
            >
              {testimoniesData.map(({ imageSrc, name, note }, index) => (
                <div
                  key={index}
                  className="flex space-x-6 w-full testimonies__slider-cover "
                >
                  <Image src={imageSrc} alt="company logo" className="w-24" />
                  <div className="">
                    <p className=" text-2xl font-normal">{note}</p>
                    <p className=" text-end text-lg font-thin">-{name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-8 text- mt-8">
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
    </PageSection>
  );
};

export default Testimonies;
