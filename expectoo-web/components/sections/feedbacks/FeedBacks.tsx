"use client";
import React, { useRef, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Testimonial from "./Testimonial";

const FeedBacks = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const prevButton = prevRef.current;
      const nextButton = nextRef.current;

      //@ts-ignore
      prevButton.addEventListener("click", () => {
        //@ts-ignore
        swiperRef.current?.slidePrev();
      });
      //@ts-ignore
      nextButton.addEventListener("click", () => {
        //@ts-ignore
        swiperRef.current?.slideNext();
      });
    }
  }, [prevRef.current, nextRef.current]);
  //bg-[url('/line.png')]
  return (
    <div className="w-full">
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div className="relative">
          <div className="w-full 2xl:hidden h-6 items-center z-0 top-[50%] absolute bg-primary/20"></div>
          <div className="  flex h-auto my-10 mt-12 items-center ">
            <Swiper
              onSwiper={(swiper) => {
                //@ts-ignore
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Pagination, Scrollbar]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              loop={true}
              className="swiper_container"
            >
              <SwiperSlide className="swiper_card">
                <Testimonial id={1} />
              </SwiperSlide>
              <SwiperSlide className="swiper_card">
                <Testimonial id={2} />
              </SwiperSlide>
              <SwiperSlide className="swiper_card">
                <Testimonial id={3} />
              </SwiperSlide>
              <SwiperSlide className="swiper_card">
                <Testimonial id={4} />
              </SwiperSlide>
              <SwiperSlide className="swiper_card">
                <Testimonial id={5} />
              </SwiperSlide>
            </Swiper>

            {/* <div className="flex   items-center space-x-16 md:pr-20 ">
          <span className="flex font-bold text-black/40 font-montserrat text-[180px] ">
            <h1 className="-ml-10">0</h1>
            <h1>1</h1>
          </span>

          <p className="vertical text-primary text-xl font-semibold">
            Clients Feedback
          </p>

          <img src="feedback.png" className="w-32 h-32" alt="" />

          <div className="md:max-w-650px] xl:max-w-[900px]">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              eiusmod tempor incididunt ut labore tempo incididunt ut labore et
              dolore magna aliqua.
            </p>

            <div className="w-full flex justify-end">
              <div>
                <p>- Carlos Ramos</p>
                <span className="flex justify-end">
                  <p>Lotus</p>
                </span>
              </div>
            </div>
          </div>
        </div> */}
          </div>

          <div className="flex items-center md:-mt-10 mb-10  w-full justify-center">
            <div className="flex space-x-4 items-center">
              <div ref={prevRef}>
                <BsArrowLeft className="text-4xl text-gray-400 cursor-pointer" />
              </div>

              <p>Order</p>
              <div ref={nextRef}>
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

export default FeedBacks;
