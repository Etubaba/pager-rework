'use client';
import { ourValueNote, ourValueTitles } from '@/data';
import PageSection from '../pageSection';
import { useAnimateContextContext } from '@/context/animateContext';
import GalleryWrapper from './galleryWrapper';

const OurValue = () => {
  const { state, handleStateChange } = useAnimateContextContext();
  const { galleryCount } = state;

  const handleOnMouseEnter = (value: number) => {
    handleStateChange({
      type: 'galleryCount',
      payload: value,
    });
  };

  return (
    <PageSection>
      <div className="flex h-full">
        <div className="w-[17rem]  mt-32  relative">
          {ourValueTitles.map((text, index) => (
            <div
              onMouseEnter={() => handleOnMouseEnter(index)}
              key={index}
              className=" mt-1"
            >
              <h1
                className={` ${
                  galleryCount === index ? 'our__value' : ' text-[#606060]'
                } font-semibold text-TitleSize  w-full px-4 capitalize cursor-pointer relative our__value-title `}
              >
                {text}
              </h1>
            </div>
          ))}
          <article className="relative h-[14rem] bottom-[-4em] mt-20 w-[30rem]">
            {ourValueNote.map((text, index) => (
              <p
                key={index}
                className={` ${
                  galleryCount === index
                    ? 'page_note_active  '
                    : 'page_note_non_Active '
                } absolute top-0 left-0`}
              >
                {text}
              </p>
            ))}
          </article>
        </div>
        <GalleryWrapper />
      </div>
    </PageSection>
  );
};

export default OurValue;
