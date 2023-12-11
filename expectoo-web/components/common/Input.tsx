"use client";

import { InputType } from "@/interface";
import React, { useState } from "react";

const Input = ({ type, style, value, onChange, placeholder }: InputType) => {
  const [outline, setOutline] = useState(false);
  return (
    <div
      className={`w-full px-2 rounded-md py-1.5 border ${
        outline ? " border-primary " : "border-[#E5E5E4] "
      }   `}
    >
      <input
        className={`placeholder:text-xs ${
          style !== undefined ? style : ""
        }  text-[13px] text-white bg-transparent    w-full outline-none`}
        type={type}
        onBlur={() => {
          setOutline(false);
        }}
        onFocus={() => {
          setOutline(true);
        }}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
