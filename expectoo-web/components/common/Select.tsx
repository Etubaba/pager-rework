"use client";
import { selectType } from "@/interface";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Select = ({ value, list, setValue }: selectType) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="bg-[#868788] rounded-md px-2 py-2 flex justify-between items-center "
      >
        <p className="text-white">{value}</p>
        <IoIosArrowDown
          onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className={`${
            open ? "text-primary " : "text-white dark:text-textwhite"
          }   text-sm mt-[2px]`}
        />
      </div>

      {open && (
        <div
          className={`max-h-[100px] pb-5 
                  mt-1 w-full   absolute  cursor-pointer bg-[#262F38] rounded overflow-y-auto  transition  duration-300 ease-in z-40 shadow-lg`}
        >
          {list.map((item, index) => (
            <p
              onClick={() => {
                setValue(item);
                setOpen(false);
              }}
              key={index}
              className="flex hover:bg-[#262F38]/40  text-white  items-center text-xs px-2 rounded-md py-1"
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
