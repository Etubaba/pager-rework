import Image from 'next/image';
import PageSection from '../pageSection';
import profile from '@/assets/profile3.png';

const Team = () => {
  return (
    <PageSection backgroundColor=" bg-BLACK_01">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-[6.5rem] text-white font-semibold rotate-[-90deg] leading-[1] translate-x-[-1rem]">
            Our <br /> <span className=" text-PINK_01">Team</span>
          </h1>
        </div>

        <div className="flex flex-1 h-[41rem] space-x-6">
          <div className="flex flex-1 flex-col space-y-6 ">
            <div className="rounded-[1rem] relative h-1/2 w-full overflow-hidden cursor-pointer">
              <Image
                src={profile}
                alt="profile"
                className="rounded-[1rem] w-full h-full hover:scale-[1.2] transition-all duration-200 ease-in"
              />
              <span
                className=" absolute bottom-0 w-full right-0 left-0 h-14 bg-PINK_01/70 text-white flex justify-center items-center
            rounded-b-[1rem] font-medium
            "
              >
                Adedeji Femi
              </span>
            </div>
            <div className="rounded-[1rem] relative h-1/2 w-full overflow-hidden cursor-pointer">
              <Image
                src={profile}
                alt="profile"
                className="rounded-[1rem] w-full h-full hover:scale-[1.2] transition-all duration-200 ease-in"
              />
              <span
                className=" absolute bottom-0 w-full right-0 left-0 h-14 bg-PINK_01/70 text-white flex justify-center items-center
            rounded-b-[1rem] font-medium
            "
              >
                Adedeji Femi
              </span>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="rounded-[1rem]  relative w-full flex-1  h-[90%]  overflow-hidden cursor-pointer ">
              <Image
                src={profile}
                alt="profile"
                className="rounded-[1rem] w-full h-full hover:scale-[1.2] transition-all duration-200 ease-in"
              />
              <span
                className=" absolute bottom-0 right-0 left-0 h-14 bg-PINK_01/70 text-white flex justify-center items-center
            rounded-b-[1rem] font-medium
            "
              >
                Adedeji Femi
              </span>
            </div>
            <div className=" mt-5 text-white h-16">
              <p>Behind the scenes of the movie production.</p>
              <p>-Matthew Bere</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col space-y-6 ">
            <div className="rounded-[1rem] relative h-1/2 w-full overflow-hidden cursor-pointer">
              <Image
                src={profile}
                alt="profile"
                className="rounded-[1rem] w-full h-full hover:scale-[1.2] transition-all duration-200 ease-in"
              />
              <span
                className=" absolute bottom-0 w-full right-0 left-0 h-14 bg-PINK_01/70 text-white flex justify-center items-center
            rounded-b-[1rem] font-medium
            "
              >
                Adedeji Femi
              </span>
            </div>
            <div className="rounded-[1rem] relative h-1/2 w-full overflow-hidden cursor-pointer">
              <Image
                src={profile}
                alt="profile"
                className="rounded-[1rem] w-full h-full hover:scale-[1.2] transition-all duration-200 ease-in"
              />
              ˜
              <span
                className=" absolute bottom-0 w-full right-0 left-0 h-14 bg-PINK_01/70 text-white flex justify-center items-center
            rounded-b-[1rem] font-medium"
              >
                Adedeji Femi
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Team;
