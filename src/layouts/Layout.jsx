import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      {navigation.state === "loading" ? (
        <div className=" max-w-[1304px] flex items-center justify-center h-[70vh] px-4  mx-auto ">
         <span className="loading loading-infinity loading-md"></span>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer/>
    </div>
  );
};

export default Layout;
