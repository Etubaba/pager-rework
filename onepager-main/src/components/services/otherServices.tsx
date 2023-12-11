'use client';
import { otherServicesImages } from '@/data';
import Image from 'next/image';
import PageSection from '../pageSection';
import { useState } from 'react';
import Btn from '../elements/btn';

const OtherServices = () => {
  const [spanWidth, setSpanWidth] = useState<string>('');
  const [showSpan, setShowSpan] = useState<boolean>(false);

  const handleOnMouseEnter = (value: number) => {
    const width = `${value * 20}%`;
    setShowSpan(true);
    setSpanWidth(() => width);
  };

  return (
    <PageSection className="mb-8 rounded-xl">
      <section className="rounded-xl other_services p-20 ">
        <div className="flex justify-between items-center">
          <h2 className="text-white capitalize text-TitleSize">
            digital marketing
          </h2>

          <Btn>Get Quote</Btn>
        </div>

        <div className="relative">
          <span
            style={{ left: spanWidth }}
            className={`absolute w-[20%] h-full inline-block service__icon-span  hover:bg-transparent
             rounded-lg border-2 ${
               showSpan ? ' border-white' : ''
             }  hover:border-white cursor-pointer border-transparent`}
          ></span>
          <div className="flex justify-center space-x-4 mt-8">
            {otherServicesImages.map(({ imageSrc, text }, index) => (
              <div
                onMouseEnter={() => handleOnMouseEnter(index)}
                onMouseLeave={() => setShowSpan(false)}
                key={index}
                className=" flex justify-center cursor-pointer items-center  flex-col p-3 relative flex-1 service__icon-cover"
              >
                <div className="w-[10rem] relative ">
                  <Image
                    src={imageSrc}
                    alt="other images"
                    className="w-full scale-90 "
                  />
                </div>
                <p className=" text-white inline-block text-lg text-center">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageSection>
  );
};

export default OtherServices;
