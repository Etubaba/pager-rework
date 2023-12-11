import { TChildrenProp } from '@/@types/components.types';

const Btn = ({ children, className }: TChildrenProp) => {
  return (
    <button
      className={` ${className} py-3 border border-white text-white bg-[#0d1522] rounded-[3rem] px-6`}
    >
      {children}
    </button>
  );
};

export default Btn;
