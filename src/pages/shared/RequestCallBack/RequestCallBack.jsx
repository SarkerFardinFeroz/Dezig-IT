import { Link } from "react-router-dom";
import "./RequstCallBack.css";
const RequestCallBack = () => {
  return (
    <div className="xl:px-44 ">
      <div className="bg-gradient-to-r from-[#6635b9] to-[#b154f2] px-9 py-9 md:px-14 md:py-12 rounded-tl-[100px] rounded-br-[100px]  lg:flex justify-between items-center  ">
        <div>
          <h3 className="text-[20px] lg:text-[30px]  tracking-widest bg-gradient-to-r from-[#3c6bfd] to-[#ff55db] bg-clip-text text-transparent font-medium pb-3 ">
            We're looking forward to start a new project
          </h3>
          <h3 className="font-outline-2 text-[30px] md:text-[43px] font-bold text-[#11111100]">
            Let's take your business to the next level!
          </h3>
        </div>
        <div className="pt-5 lg:pt-0">
          <button className="bg-[#02dc93] rounded-full text-black font-medium py-[5px] md:py-3 px-4 md:px-9">
            <Link to={"/contact"}>Request A Call Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCallBack;
