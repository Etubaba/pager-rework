import React, { useState } from "react";
import Modal from "../common/Modal";
import Select from "../common/Select";
import Input from "../common/Input";

const QuoteModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [value, setValue] = useState<string | number>(
    "Select Project of Interest"
  );
  const list = [
    "Software Development",
    "IT Consultation",
    "Software Training",
    "Tech Recruitment",
    "Software Maintenance",
    "Quality Assurance",
  ];
  return (
    <Modal open={open} onClose={onClose}>
      <div className="z-50 relative w-[20rem] md:w-[45rem] px-4 py-6 md:px-10 md:py-7 ">
        <div className="mb-4">
          <h2 className="text-white  font-semibold text-xs">START A PROJECT</h2>
          <h1 className="text-white text-xl font-semibold">Get A Free Quote</h1>
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
          <button className="rounded-lg text-white px-4 md:px-6 py-1.5 text-center bg-gradient-to-r from-[#5E6FFA] to-[#F166C8]">
            {" "}
            Submit Form
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default QuoteModal;
