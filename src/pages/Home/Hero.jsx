import logo from "../../assets/images/logo.png";
import { FaCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div
        className={`h-[40vh] md:h-[80vh] bg-[url('./heroImg.png')] bg-no-repeat bg-cover bg-center  md:px-20     flex items-center justify-center   `}
      >
        <div className="flex-col justify-center items-center text-center  ">
          <img
            className=" w-[140px] md:w-[320px] pb-6 md:pb-12 mx-auto"
            src={logo}
          />
          <h2 className="text-white font-semibold text-[26px] md:text-[70px] lg:text-[100px] pb-2.5 md:pb-5">
            WE BUILD DIGITAL <br /> <div className="md:-mt-8">EXPERIENCES</div>
          </h2>
          <div className="flex flex-wrap text-white items-center  justify-center">
            <div className="text-lg md:text-2xl tracking-wide	font-medium md:font-semibold">
              WEBSITES
            </div>
            <span className="text-[#02dc93] text-[8px] md:text-[12px] mx-2  md:mx-8">
              <FaCircle />
            </span>
            <div className="text-lg md:text-2xl tracking-wide	font-medium md:font-semibold">
              Branding
            </div>
            <span className="text-[#02dc93] text-[8px] md:text-[12px] mx-2  md:mx-8">
              <FaCircle />
            </span>
            <div className="text-lg md:text-2xl tracking-wide	font-medium md:font-semibold">SEO</div>
            <span className="text-[#02dc93] text-[8px] md:text-[12px] mx-2  md:mx-8">
              <FaCircle />
            </span>
            <div className="text-lg md:text-2xl tracking-wide	font-medium md:font-semibold">
              Graphics Design
            </div>
            <span className="text-[#02dc93] text-[8px] md:text-[12px] mx-2  md:mx-8">
              <FaCircle />
            </span>
            <div className="text-lg md:text-2xl tracking-wide	font-medium md:font-semibold">
              Video Editing
            </div>
            <span className="text-[#02dc93] text-[8px] md:text-[12px] mx-2  md:mx-8">
              <FaCircle />
            </span>
            <div className="text-lg md:text-2xl tracking-wide	font-medium md:font-semibold">
              Digital Marketing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
