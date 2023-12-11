import React from "react";

const ImageToggle = ({ selectedIdx }: { selectedIdx: string }) => {
  return (
    <div className="z-40 mt-10">
      <div className="flex  space-x-4">
        {selectedIdx === "01" ? (
          <img
            alt=""
            src="/mission.png"
            className=" filter animate__animated animate__fadeInUp h-[180px] w-[150px] md:h-[250px] md:w-[200px] lg:h-[400px] lg:w-[300px]"
          />
        ) : selectedIdx === "02" ? (
          <img
            alt=""
            src="/value2.1.png"
            className=" filter animate__animated animate__fadeInUp w-[150px] h-[200px] md:h-[250px] md:w-[200px] lg:h-[400px] lg:w-[300px]"
          />
        ) : (
          <img
            alt=""
            src="/Rectangle 5.png"
            className=" filter animate__animated animate__fadeInUp w-[150px] h-[200px] md:h-[250px] md:w-[200px] lg:h-[400px] lg:w-[300px]"
          />
        )}
        <div className="flex flex-col items-center space-y-2">
          <h1 className="vertical-text font-bold leading-4 h-20 md:h-28 lg:h-[120px] text-4xl md:text-6xl lg:text-[100px] text-black/40 ">
            {selectedIdx}
          </h1>
          {selectedIdx === "01" ? (
            <img
              alt=""
              src="/hands.jpeg"
              className="  object-cover  bw w-[150px] md:h-[250px] md:w-[200px] lg:h-[400px] lg:w-[300px]"
            />
          ) : selectedIdx === "02" ? (
            <img
              alt=""
              src="/value2.2.png"
              className=" filter animate__animated animate__fadeInUp w-[150px] md:h-[250px] md:w-[200px] lg:h-[400px] lg:w-[300px]"
            />
          ) : (
            <img
              alt=""
              src="/Rectangle 6.png"
              className=" filter animate__animated animate__fadeInUp w-[150px] md:h-[250px] md:w-[200px] lg:h-[400px] lg:w-[300px]"
            />
          )}
          {/*  */}
        </div>
        <div className="h-[380px] w-[260px]">
          {" "}
          {selectedIdx === "01" ? (
            <img
              alt=""
              src="/people.jpeg"
              className="animate__animated animate__fadeInUp object-cover bw w-[150px] md:h-[250px] md:w-[200px] lg:h-[400px] lg:w-[300px] "
            />
          ) : selectedIdx === "02" ? (
            <img
              alt=""
              src="/value2.3.png"
              className="animate__animated animate__fadeInUp filter w-[150px] md:h-[250px] md:w-[200px] lg:h-[400px] lg:w-[300px]"
            />
          ) : (
            <img
              alt=""
              src="/Rectangle 7.png"
              className="animate__animated animate__fadeInUp filter w-[150px] md:h-[250px] md:w-[200px] lg:h-[400px] lg:w-[300px]"
            />
          )}
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default ImageToggle;
