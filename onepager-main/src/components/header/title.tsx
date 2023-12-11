import { THeaderTitle } from '@/@types/components.types';
import { isWordExist } from '@/data';

const HeaderTitle = ({ text }: THeaderTitle) => {
  const words = text.split(' ');
  return (
    <section className="flex space-x-2 items-center">
      {words.map((word, index) => (
        <p
          key={index}
          className={` ${
            isWordExist.includes(word)
              ? 'text-PINK_01 border-b-2 border-PINK_01  '
              : 'text-white'
          }  font-bold text-[4rem] p-0`}
        >
          {word}
        </p>
      ))}
    </section>
  );
};

export default HeaderTitle;
