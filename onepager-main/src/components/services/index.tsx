'use client';
import { serviceTitles } from '@/data';
import { useAnimateContextContext } from '@/context/animateContext';
import ServicesGallery from './gallery';
import PageSection from '../pageSection';
import OtherServices from './otherServices';

const Services = () => {
  const { state, handleStateChange } = useAnimateContextContext();
  const { servicesTitleCount } = state;

  const handleOnMouseEnter = (value: number) => {
    handleStateChange({
      type: 'servicesTitleCount',
      payload: value,
    });
  };
  return (
    <PageSection backgroundColor="bg-BLACK_01">
      <section className="mt-8 py-[4rem] relative ps-16 text-white">
        <h1 className=" text-TitleSize  font-semibold w-20 leading-[1.2]">
          Our Services
        </h1>

        <section className="mt-6 relative">
          {serviceTitles.map((title, index) => (
            <div
              key={index}
              className="relative h-10 flex items-center px-2 mt-4 "
            >
              <p
                onMouseEnter={() => handleOnMouseEnter(index)}
                className={` ${
                  servicesTitleCount === index
                    ? 'text-white font-semibold'
                    : '  font-thin'
                } cursor-pointer text-xl relative z-20  w-[100%] capitalize transition-all duration-500 `}
              >
                {title}
              </p>

              <span
                className={` ${
                  servicesTitleCount === index ? 'w-[40%]' : 'w-0'
                } absolute top-0 left-0  h-full bg-PINK_01  
                z-10 transition-all duration-500`}
              >
                &nbsp;
              </span>
            </div>
          ))}
          <ServicesGallery />
        </section>
      </section>
    </PageSection>
  );
};

export default Services;
