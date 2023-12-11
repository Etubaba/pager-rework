import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

/** @format */

export type THeaderTitle = {
  text: string;
};
export type TChildrenProp = {
  className?: string;
  children: ReactNode;
  backgroundColor?: string;
};

export type TOurValuePageCount = {
  count: number;
  images: StaticImageData[];
};

export type TOtherServicesImages = {
  imageSrc: StaticImageData;
  text: string;
};

export type TSlideProps = {
  sharedRef: React.RefObject<HTMLDivElement>;
};

export type TTestimonies = {
  imageSrc: StaticImageData;
  note: string;
  name: string;
};
