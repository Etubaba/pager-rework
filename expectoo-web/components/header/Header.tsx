"use client";
import Image from "next/image";
import React from "react";
import QuoteBtn from "../common/QuoteBtn";
import QuoteModal from "../modal/QuoteModal";
import { useModalToggle } from "@/store";

const Header = () => {
  // const openModal = useModalToggle((state) => state.openModal);
  const toggleModal = useModalToggle((state) => state.toggleModal);
  return (
    <div className="sticky flex justify-between bg-transparent items-center ">
      <div className="w-24 h-10">
        <Image
          width={90}
          height={42}
          layout="responsive"
          alt="Expectoo Logo"
          src={"/expectoologo.png"}
          className="object-contain "
        />
      </div>

      <div className="flex space-x-3 md:space-x-10 items-center">
        <img
          src="/germany.webp"
          className="md:w-14 w-7 h-6 md:h-9 rounded md:rounded-md"
        />
        <QuoteBtn onClick={() => toggleModal(true)} text={"Get A Qoute"} />
      </div>
    </div>
  );
};

export default Header;
