'use client';

import { TPageToggle } from '@/@types/app.types';
import Gallery from './gallery';
import gallery_01 from '@/assets/img/gallery/gallery_01.png';
import gallery_02 from '@/assets/img/gallery/gallery_02.jpeg';
import gallery_03 from '@/assets/img/gallery/gallery_03.png';

const PageToggle: TPageToggle[] = [
  {
    count: 0,
    images: [gallery_01, gallery_02, gallery_03],
  },
  {
    count: 1,
    images: [gallery_03, gallery_01, gallery_02],
  },
  {
    count: 2,
    images: [gallery_02, gallery_03, gallery_01],
  },
];
const GalleryWrapper = () => {
  return (
    <section className="flex-1 relative  overflow-hidden">
      {PageToggle.map((props, index) => (
        <Gallery {...props} key={index} />
      ))}
    </section>
  );
};

export default GalleryWrapper;
