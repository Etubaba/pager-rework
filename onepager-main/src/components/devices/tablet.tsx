import { TSlideProps } from '@/@types/components.types';
import gallery_01 from '@/assets/img/gallery/gallery_01.png';
import gallery_02 from '@/assets/img/gallery/gallery_02.jpeg';
import gallery_03 from '@/assets/img/gallery/gallery_03.png';
import Image, { StaticImageData } from 'next/image';

const images: StaticImageData[] = [gallery_01, gallery_02, gallery_03];

const Tablet = ({ sharedRef }: TSlideProps) => {
  return (
    <section>
      <div className=" w-[24rem]">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[10rem] max-w-[341px] md:h-[30rem] md:max-w-[512px]">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

          <div className="overflow-hidden h-full">
            <div ref={sharedRef} className="projects__slider flex  h-full">
              {images.map((imageSrc, index) => (
                <Image
                  src={imageSrc}
                  alt="projects"
                  key={index}
                  className="w-full h-full rounded-2xl"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tablet;
