import { ModalType } from "@/interface";
import { IoMdClose } from "react-icons/io";

const Modal = ({ open, title, onClose, children }: ModalType) => {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className={
            "fixed z-[1000]   left-0  bg-black/50   top-0  w-full h-screen flex justify-center items-center"
          }
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" bg-[#585E65] z-50 relative  shadow-sm animate__animated mt-3 animate__fadeIn w-fit py-5 px-5"
          >
            {/* <div
              className={
                title !== undefined
                  ? "flex justify-between"
                  : "flex justify-end"
              }
            > */}
            {/* {title !== undefined && (
                <p className="text-lg  font-semibold">{title}</p>
              )} */}
            {/* <IoMdClose
                className={
                  title !== undefined
                    ? "cursor-pointer  right-[27%] md:right-[27%] lg:right-[32%]  mt-1 md:mt-2"
                    : "cursor-pointer   absolute    mt-1 md:mt-2"
                }
                onClick={onClose}
              /> */}
            {/* </div> */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
