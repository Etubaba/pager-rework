/** @format */

import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type TOurValueState = {
  galleryCount: number;
  servicesTitleCount: number;
};

export type Actions = { type: string; payload?: any };

export type TPageToggle = {
  count: number;
  images: StaticImageData[];
};

export type TMarkers = {
  latLng: number[];
  name: string;
};
