import React from "react";

const Testimonial = ({ id }: { id: number }) => {
  return (
    <div className="md:flex z-10 px-4   md:items-center md:space-x-16 md:pr-20 ">
      <span className="md:flex hidden font-bold z-10 text-black/40 font-montserrat text-[180px] ">
        <h1 className="-ml-10">0</h1>
        <h1>{id}</h1>
      </span>

      <p className="vertical hidden md:block text-primary text-xl font-semibold">
        Clients Feedback
      </p>

      <img src="feedback.png" className="w-32 h-32 mb-4 md:mb-0" alt="" />

      <div className="md:max-w-650px] xl:max-w-[900px]">
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eiusmod
          tempor incididunt ut labore tempo incididunt ut labore et dolore magna
          aliqua.
        </p>

        <div className="w-full flex justify-end">
          <div>
            <p>- Carlos Ramos</p>
            <span className="flex justify-end">
              <p>Lotus</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
