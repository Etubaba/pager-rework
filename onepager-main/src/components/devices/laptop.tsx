import { TSlideProps } from '@/@types/components.types';

import gallery_01 from '@/assets/img/logo.png';
import gallery_02 from '@/assets/img/gallery/gallery_02.jpeg';
import gallery_03 from '@/assets/img/gallery/gallery_03.png';
import Image, { StaticImageData } from 'next/image';

const images: StaticImageData[] = [gallery_01, gallery_02, gallery_03];

const LapTop = ({ sharedRef }: TSlideProps) => {
  return (
    <div className="vertical-align-element relative table">
      <div className="vertical-align-helper w-[21rem]">
        <div className="laptop">
          <div className="screen h-40 p-2 rounded-t-md  overflow-hidden bg-black mx-5 ">
            <div className="overflow-hidden h-full">
              <div ref={sharedRef} className="projects__slider flex h-full ">
                {images.map((imageSrc, index) => (
                  <Image
                    src={imageSrc}
                    alt="projects"
                    key={index}
                    className="w-full h-full rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="keyboard w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LapTop;
