import service_01 from '@/assets/img/service/service_01.webp';
import service_02 from '@/assets/img/service/service_02.webp';
import { useAnimateContextContext } from '@/context/animateContext';
import { serviceNotes } from '@/data';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef } from 'react';

const images: StaticImageData[] = [
  service_01,
  service_02,
  service_01,
  service_02,
  service_01,
  service_02,
];
const ServicesGallery = () => {
  const slider = useRef<any>(null);
  const noteSlider = useRef<any>(null);
  const { state } = useAnimateContextContext();
  const { servicesTitleCount } = state;

  function slide(ele: any) {
    const slideWidth = ele.current.clientWidth;
    ele.current.style.transform = `translateX(-${
      slideWidth * servicesTitleCount
    }px)`;
  }

  useEffect(() => {
    slide(slider);
    slide(noteSlider);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [servicesTitleCount]);
  return (
    <section className="absolute right-0 w-[70%]  top-[-4rem] mt-5">
      <div className="h-[22rem] w-full overflow-x-hidden  service__gallery">
        <div ref={slider} className="flex h-full service__slider">
          {images.map((imageSrc, index) => (
            <Image
              src={imageSrc}
              alt="gallery"
              className="h-full max-w-none"
              key={index}
            />
          ))}
        </div>
      </div>
      <div className=" w-[80%] mt-6 flex overflow-x-hidden">
        <div ref={noteSlider} className="flex service__slider-note w-full">
          {serviceNotes.map((note, index) => (
            <p key={index} className=" px-4 ">
              {note}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGallery;
