"use client";
import { ourValues } from "@/components/content";
import { useState } from "react";

import React from "react";
import ImageToggle from "./ImageToggle";
const Values = () => {
  const [selectedValue, setSelectedValue] = useState<string>("01");

  return (
    <section className="w-full z-0">
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div className="bg-white px-4  py-6 relative md:pt-20 md:pb-12 flex flex-col lg:flex-row lg:justify-between h-auto w-full lg:space-x-3">
          <div className="mt-6 px-4 md:px-0 flex flex-col md:mt-32 justify-center md:justify-start">
            {ourValues.map((value, idx) => (
              <h1
                key={value.id}
                onClick={() => setSelectedValue(value.id)}
                className={`py-0.5 cursor-pointer text-2xl tracking-widest md:pl-20 font-semibold ${
                  value.id === selectedValue ? "bg-primary/20" : ""
                }`}
              >
                {value.name}
              </h1>
            ))}

            {ourValues
              .filter((val) => val.id === selectedValue)
              .map((val) => (
                <div
                  key={val.id}
                  className={`text-base mt-3 md:pl-20 max-w-[340px] transition-opacity duration-500 ${
                    val.id === selectedValue ? "opacity-100" : "opacity-0"
                  } `}
                >
                  <p>{val.message}</p>
                </div>
              ))}
          </div>
          <div className="md:flex hidden items-center  justify-center px-2">
            <ImageToggle selectedIdx={selectedValue} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
