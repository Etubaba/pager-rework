import { TSlideProps } from '@/@types/components.types';
import gallery_01 from '@/assets/img/gallery/gallery_01.png';
import gallery_02 from '@/assets/img/gallery/gallery_02.jpeg';
import gallery_03 from '@/assets/img/gallery/gallery_03.png';
import Image, { StaticImageData } from 'next/image';

const images: StaticImageData[] = [gallery_01, gallery_02, gallery_03];

const Phone = ({ sharedRef }: TSlideProps) => {
  return (
    <section>
      <div className=" w-[8rem]">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-lg h-[15rem] max-w-[341px] md:h-[13rem] md:max-w-[512px]">
          <div className="h-[20px] w-[2.5px] bg-gray-800 dark:bg-gray-800 absolute -left-[12px] top-[20%] rounded-l-md"></div>
          <div className="h-[30px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[13px] top-[30%] rounded-r-md"></div>
          {/* <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800"></div> */}
          <div className="overflow-hidden  h-full">
            <div ref={sharedRef} className="projects__slider flex h-full ">
              {images.map((imageSrc, index) => (
                <Image
                  src={imageSrc}
                  alt="projects"
                  key={index}
                  className="w-full h-[100%] rounded-md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phone;
