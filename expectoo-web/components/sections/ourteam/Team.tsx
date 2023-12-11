import React from "react";

const Team = () => {
  return (
    <div className="bg-darkbg w-full">
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div className=" py-10 w-full px-4 md:justify-between md:flex md:space-x-5 md:pr-10 md:pl-16 ">
          <div className="lg:hidden block mb-6">
            <h2 className="md:text-3xl text-2xl font-bold text-white ">
              Our <b className="text-primary">team</b>
            </h2>
          </div>

          <div className=" lg:hidden block w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-5 ">
              {" "}
              <div className=" rounded-2xl inline-block overflow-hidden relative w-[150px] h-[150px]  ">
                <img
                  src="/profile.png"
                  className="h-full w-full  z-0 zoom-image  rounded-2xl"
                  alt="profile"
                />

                <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[20%] text-white  bg-primary/60 rounded-br-md rounded-bl-md  text-center">
                  <p>Adenike </p>
                </div>
              </div>
              <div className=" rounded-2xl inline-block overflow-hidden relative w-[150px] h-[150px]  ">
                <img
                  src="/profile.png"
                  className="h-full w-full  z-0 zoom-image  rounded-2xl"
                  alt="profile"
                />

                <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[20%] text-white  bg-primary/60 rounded-br-md rounded-bl-md  text-center">
                  <p>Adenike </p>
                </div>
              </div>
              <div className=" rounded-2xl inline-block overflow-hidden relative w-[150px] h-[150px]  ">
                <img
                  src="/profile.png"
                  className="h-full w-full  z-0 zoom-image  rounded-2xl"
                  alt="profile"
                />

                <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[20%] text-white  bg-primary/60 rounded-br-md rounded-bl-md  text-center">
                  <p>Adenike </p>
                </div>
              </div>
              <div className=" rounded-2xl inline-block overflow-hidden relative w-[150px] h-[150px]  ">
                <img
                  src="/profile.png"
                  className="h-full w-full  z-0 zoom-image  rounded-2xl"
                  alt="profile"
                />

                <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[20%] text-white  bg-primary/60 rounded-br-md rounded-bl-md  text-center">
                  <p>Adenike </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className=" relative mt-[77px] md:block hidden">
            <p className="text-white left-[6rem] font-bold vertical mt-[11.5rem] text-[130px] absolute">
              {" "}
              Our
            </p>
            <p className=" text-primary mt-16 font-bold vertical text-[130px] left-[14rem]  absolute">
              Team
            </p>
          </div> */}

          <div className=" lg:block hidden xl:left-[18%]  xl:text-7xl pt-[18rem] xl:pt-[18rem] text-7xl absolute  left-0 tracking-widest z-10">
            <h1 className="font-bold text-white rotate-[270deg]">
              Our <br /> <span className="text-primary text-8xl">Team</span>
            </h1>
          </div>
          {/* <div className="h-20 md:block hidden w-[60%]"></div> */}

          <div className="lg:flex 2xl:justify-center lg:justify-end hidden  mt-10 space-x-4 w-full">
            <div className="flex flex-col space-y-4">
              <div className=" rounded-2xl inline-block overflow-hidden relative w-[210px] h-[202px] ">
                <img
                  src="/profile.png"
                  className="h-full w-full z-0 zoom-image  rounded-2xl"
                  alt="profile"
                />
                <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[20%] text-white  bg-primary/60 rounded-br-md rounded-bl-md  text-center">
                  <p>Adenike </p>
                </div>
              </div>
              <div className=" rounded-2xl inline-block overflow-hidden relative w-[210px] h-[285px] ">
                <img
                  src="/profile2.png"
                  className=" z-0 zoom-image  rounded-2xl h-full w-full bg-cover"
                  alt="profile"
                />
                <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[16%] text-white  bg-primary/60 rounded-br-md rounded-bl-md  text-center">
                  <p>Adenike </p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl inline-block overflow-hidden relative  h-[500px] w-[261px]">
                <img
                  className="w-full h-full z-0 zoom-image  rounded-2xl"
                  src="profile3.png"
                  alt=""
                />
                <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[10%] text-white  bg-primary/60 rounded-br-md rounded-bl-md  text-center">
                  <p>Adenike </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className=" rounded-2xl inline-block overflow-hidden relative w-[210px] h-[202px]  ">
                <img
                  src="/profile.png"
                  className="h-full w-full  z-0 zoom-image  rounded-2xl"
                  alt="profile"
                />

                <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[20%] text-white  bg-primary/60 rounded-br-md rounded-bl-md  text-center">
                  <p>Adenike </p>
                </div>
              </div>
              <div className=" rounded-2xl inline-block overflow-hidden relative w-[210px] h-[202px]  ">
                <img
                  src="/profile.png"
                  className="h-full w-full  z-0 zoom-image  rounded-2xl"
                  alt="profile"
                />

                <div className="z-50 justify-center items-center flex relative w-full -mt-[19%] h-[20%] text-white  bg-primary/60 rounded-br-md rounded-bl-md  text-center">
                  <p>Adenike </p>
                </div>
              </div>
              {/* <div className="rounded-md w-[265px] h-[202px] ">
            <img src="/profile2.png" />
          </div> */}
              <div className="max-w-[220px]  text-white">
                <p>Behind the scenes of the movie production.</p>
                <div className="flex  justify-end">
                  <p className="-ml-6">-Matthew Bere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
