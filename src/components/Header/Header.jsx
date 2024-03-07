import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.css";
import { useEffect, useState } from "react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLinks = (
    <>
      <li className="text-lg border-b border-[#7e7e7e46] lg:border-none">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-lg border-b border-[#7e7e7e46] lg:border-none ">
        <NavLink to={"/service"}>Service</NavLink>
      </li>
      <li className="text-lg border-b border-[#7e7e7e46] lg:border-none ">
        <NavLink to={"/pricing"}>Pricing</NavLink>
      </li>
      <li className="text-lg border-b border-[#7e7e7e46] lg:border-none ">
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li className="text-lg border-b border-[#7e7e7e46] lg:border-none ">
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <header
      className={`bg-[#080E10] py-2 border-b border-[#3a3e40] sticky top-0 duration-500 ${
        isScrolled
          ? "bg-[#00000062]   shadow-md backdrop-blur-lg text-white"
          : "text-white"
      }`}
    >
      <nav className="navbar flex  gap-8 justify-between max-w-[1604px] px-4   mx-auto pt-2 pb-3  items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] backdrop-blur-lg p-2  bg-[#111111a1] rounded-md  w-52 border border-[#3f3f3f62] "
            >
              {navLinks}
            </ul>
          </div>
          <div>
            <img className="w-48" src={logo} alt="dezigit" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <button className="bg-[#02dc93] rounded-full text-black font-medium py-[5px] md:py-3 px-4 md:px-9">
            <Link to={"/contact"}>Contact Us</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
