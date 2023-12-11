'use client';
import { useAnimateContextContext } from '@/context/animateContext';
import Image from 'next/image';
import { TOurValuePageCount } from '@/@types/components.types';

const Gallery = ({ count, images }: TOurValuePageCount) => {
  const { state } = useAnimateContextContext();
  const { galleryCount } = state;
  const animationsClass =
    galleryCount === count
      ? 'page__active inline-block '
      : 'page__inactive inline-block';
  return (
    <section className="grid grid-cols-3 flex-1 gap-3  absolute w-full  top-0 ">
      <div className="w-full absolute z-10 top-[0rem] left-[50%] translate-x-[-50%]  text-center">
        <p className="font-semibold text-[6rem] rotate-[-90deg] ">
          0{galleryCount + 1}
        </p>
      </div>
      <div className="text-center">
        <div className={`${animationsClass} h-[25rem] image__wrapper`}>
          <Image src={images[0]} alt=" gallery" className="h-full" />
        </div>
      </div>
      <div className="text-center">
        <div
          className={`${animationsClass} h-[25rem] mt-[8rem] image__wrapper`}
        >
          <Image src={images[1]} alt=" gallery" className="h-full" />
        </div>
      </div>
      <div className="text-center mt-[6rem]">
        <div className={`${animationsClass} h-[25rem] image__wrapper`}>
          <Image
            src={images[2]}
            alt=" gallery"
            className={`${animationsClass} h-full`}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
