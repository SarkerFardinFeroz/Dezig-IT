import RequestCallBack from "../shared/RequestCallBack/RequestCallBack";
import Agency from "./Agency";
import Expertise from "./Expertise";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="px-4  ">
        <Agency />
        <Expertise/>
        <RequestCallBack/>
      </div>
    </div>
  );
};

export default Home;
