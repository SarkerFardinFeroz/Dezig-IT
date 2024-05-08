import { GoArrowRight } from "react-icons/go";
import e1 from "../../assets/images/e1.jpg";
import e2 from "../../assets/images/e2.jpg";
import e3 from "../../assets/images/e3.jpg";
import e4 from "../../assets/images/e4.jpg";
import { Link } from "react-router-dom";
const Expertise = () => {
  return (
    <div className="pb-20 md:pb-24 lg:pb-32 xl:px-44 ">
      <div className="text-center pb-20">
        <h3 className="text-[20px] md:text-[30px] lg:text-[40px] pb-12 tracking-widest bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium 	">
          Our Expertise
        </h3>
        <p className="text-lg md:text-xl lg:text-2xl text-[#848788] mx-auto  xl:w-[1100px] ">
          Dezig IT specializes in video editing, graphics designing, web
          development, and digital marketing. With a focus on creativity and
          innovation, we deliver tailored solutions to elevate your brand and
          drive results in the digital landscape.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 ">
        <div>
          <img
            src={e1}
            className="pb-10 md:w-[400px] md:h-[350px] rounded rounded-tl-[100px] rounded-br-[100px] object-cover	"
          />
          <h4 className="text-xl md:text-3xl text-white tracking-widest pb-5">
            Graphics Designing
          </h4>
          <div className="flex items-center  text-[#7c56f1] font-medium tracking-widest">
            <Link to={"/service"}>
              <p className="text-lg md:text-xl">LEARN MORE </p>
            </Link>
            <div className="text-lg md:text-xl font-medium pl-2">
              <GoArrowRight />
            </div>
          </div>
        </div>
        <div>
          <img
            src={e2}
            className="pb-10 md:w-[400px] md:h-[350px] rounded rounded-tl-[100px] rounded-br-[100px] object-cover	"
          />
          <h4 className="text-xl md:text-3xl text-white tracking-widest pb-5">
            E-Commerce
          </h4>
          <div className="flex items-center  text-[#7c56f1] font-medium tracking-widest">
            <Link to={"/service"}>
              <p className="text-lg md:text-xl">LEARN MORE </p>
            </Link>
            <div className="text-lg md:text-xl font-medium pl-2">
              <GoArrowRight />
            </div>
          </div>
        </div>
        <div>
          <img
            src={e3}
            className="pb-10 md:w-[400px] md:h-[350px] rounded rounded-tl-[100px] rounded-br-[100px] object-cover	"
          />
          <h4 className="text-xl md:text-3xl text-white tracking-widest pb-5">
            Web Development
          </h4>
          <div className="flex items-center  text-[#7c56f1] font-medium tracking-widest">
            <Link to={"/service"}>
              <p className="text-lg md:text-xl">LEARN MORE </p>
            </Link>
            <div className="text-lg md:text-xl font-medium pl-2">
              <GoArrowRight />
            </div>
          </div>
        </div>
        <div>
          <img
            src={e4}
            className="pb-10 md:w-[400px] md:h-[350px] rounded rounded-tl-[100px] rounded-br-[100px] object-cover	"
          />
          <h4 className="text-xl md:text-3xl text-white tracking-widest pb-5">
            Branding & Creative Services
          </h4>
          <div className="flex items-center  text-[#7c56f1] font-medium tracking-widest">
            <Link to={"/service"}>
              <p className="text-lg md:text-xl">LEARN MORE </p>
            </Link>
            <div className="text-lg md:text-xl font-medium pl-2">
              <GoArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
