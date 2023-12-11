"use client";
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import Select from "@/components/common/Select";
import React, { useState } from "react";
import moment from "moment";

const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | number>(
    "Select Project of Interest"
  );
  const [title, setTitle] = useState("");
  const getDaysRemaining = () => {
    const currentDate = moment();
    const daysInCurrentMonth = currentDate.daysInMonth();
    return daysInCurrentMonth - currentDate.date();
  };

  const currentYear = moment().year();
  const monthInYear = [];
  // Generate names of months and days in each month
  const months = [];
  const daysInMonths = [];
  for (let i = 0; i < 12; i++) {
    const monthName = moment().year(currentYear).month(i).format("MMMM");
    const daysInMonth = moment().year(currentYear).month(i).daysInMonth();
    months.push(monthName);
    daysInMonths.push(daysInMonth);
  }
  for (let i = 0; i < 12; i++) {
    const monthValues = {
      month: months[i],
      days: daysInMonths[i],
    };
    monthInYear.push(monthValues);
  }
  const indexof = monthInYear.findIndex(
    (monthInYear) => monthInYear.month === moment().format("MMMM")
  );
  const currentDateSettings = monthInYear.slice(indexof);
  currentDateSettings[0].days = getDaysRemaining();
  console.log(currentDateSettings);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="px-3 border rounded py-2"
      >
        toggle
      </button>

      {/* <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-[16rem] md:w-[45rem] px-10 py-7">
          <div className="mb-4">
            <h2 className="text-white  font-semibold text-xs">
              START A PROJECT
            </h2>
            <h1 className="text-white text-xl font-semibold">
              Get A Free Quote
            </h1>
          </div>

          <div>
            <p className="text-sm mb-2 text-white">How can we help you?</p>

            <div className="md:max-w-[300px] w-full">
              <Select value={value} list={list} setValue={setValue} />
            </div>
          </div>

          <div className="grid grid-cols-1 mt-4  md:grid-cols-2 gap-5 md:gap-8">
            <div className=" col-span-1 md:col-span-2">
              <p className="text-xs text-white mb-1">Descripe Your Project</p>
              <Input />
            </div>
            <div className=" col-span-1 ">
              <p className="text-xs text-white mb-1">Name</p>
              <Input />
            </div>
            <div className=" col-span-1 ">
              <p className="text-xs text-white mb-1">Email</p>
              <Input />
            </div>
            <div className=" col-span-1 ">
              <p className="text-xs text-white mb-1">Phone</p>
              <Input />
            </div>
            <div className=" col-span-1 ">
              <p className="text-xs text-white mb-1">Company Name</p>
              <Input />
            </div>
          </div>

          <div className="flex justify-center items-center mt-7">
            <button className="rounded-lg text-white md:px-6 py-1.5 text-center bg-gradient-to-r from-[#5E6FFA] to-[#F166C8]">
              {" "}
              Submit Form
            </button>
          </div>
        </div>
      </Modal> */}
    </div>
  );
};

export default page;
