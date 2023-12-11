import Image from 'next/image';
import Button from '../elements/btn';
import Logo from '@/assets/img/logo.png';
import WelcomeNote from './welcomeNote';
import PageSection from '../pageSection';

const Header = () => {
  return (
    <nav className="">
      <header className="header h-screen relative">
        <div className=" absolute top-0 bottom-0 right-0 left-0 bg-[#0000006a]"></div>
        <PageSection className=" relative z-10">
          <div className=" flex justify-between items-center   ">
            <Image src={Logo} alt="expectoo logo" className="w-28" />
            <div className=" flex space-x-3 items-center">
              {/* <Image
                src={Logo}
                alt="expectoo logo"
                className="w-28 rounded-md cursor-auto"
              /> */}
              <Button>Get Quote</Button>
            </div>
          </div>
          <div className="">
            <WelcomeNote />
          </div>
        </PageSection>
      </header>
    </nav>
  );
};

export default Header;
