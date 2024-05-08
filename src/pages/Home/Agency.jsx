import "./Agency.css";
import { CiCalendarDate } from "react-icons/ci";
import { PiFolderDashedThin, PiScalesLight } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";

const Agency = () => {
  return (
    <div className="py-20 md:py-24 lg:py-32  relative ">
      <div className="absolute w-full z-10 left-0 right-0 top-[-350px] h-20 shadow-box  "></div>

      <div className="xl:px-44">
        <div className="text-center pb-20">
          <h3 className="text-[20px] md:text-[30px] lg:text-[40px] pb-12 tracking-widest bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium 	">
            The last digital agency you'll ever need
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl text-[#848788] mx-auto  xl:w-[1100px] ">
            Dezig IT - The best digital solution available. We are your one-stop
            shop for everything digital, offering a variety of services from
            marketing to website design. Explore our unparalleled proficiency
            and discover why we're the final agency you'll ever require.
          </p>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <div>
            <div className="text-[#02dc93]  text-4xl pb-11">
              <CiCalendarDate />
            </div>
            <p className="text-white text:xl md:text-2xl tracking-widest">
              5+ years experience
            </p>
          </div>
          <div>
            <div className="text-[#02dc93]  text-4xl pb-11">
              <PiScalesLight />
            </div>
            <p className="text-white text:xl md:text-2xl tracking-widest">
              Unique technologies & modern approach
            </p>
          </div>
          <div>
            <div className="text-[#02dc93]  text-4xl pb-11">
              <PiFolderDashedThin />
            </div>
            <p className="text-white text:xl md:text-2xl tracking-widest">
              100+ successful cases in portfolio
            </p>
          </div>
          <div>
            <div className="text-[#02dc93]  text-4xl pb-11">
              <BsPerson />
            </div>
            <p className="text-white text:xl md:text-2xl tracking-widest">
              Customer satisfaction is our top priority
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency;
