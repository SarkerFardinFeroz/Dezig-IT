import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#080E10] bg-[url('./blurfooter.png')]  bg-no-repeat bg-cover bg-center xl:px-44  p-5 xl:p-20 md:pt-10 border-t border-[#3a3e40] px-4">
      <footer className="pt-10">
        <div className="xl:flex gap-20 align-middle">
          <div>
            <div className=" text-xl text-[#848788]">
              <img className="w-48 pb-10 " src={logo} />
              <p>
                Experience non-stop excitement! <br />
                <div className="pt-1">
                  We're open daily from (6:00AM - 11:00PM)
                </div>
              </p>{" "}
              <br />
              <p>
                <span className="text-white">
                  +8801639601286 / +8801979791352
                </span>
                <br />
                <div className="pt-1">
                  Feel free to <Link to={"/contact"}>Contact us</Link>
                </div>
              </p>
              <button className="bg-[#02dc93] rounded-full text-black font-medium hover:scale-105 duration-300 py-[5px] md:py-3 px-4 md:px-9 mt-8">
                <Link to={"/contact"}>Request For Quotes</Link>
              </button>
            </div>
          </div>
          <div className="pt-8 xl:pt-0 xl:ml-20">
            <h6 className="text-white text-xl tracking-[5px] pb-10">COMPANY</h6>
            <nav className=" text-[#848788] space-y-6 text-xl">
              <div>
                <Link>About us</Link>
              </div>
              <div>
                <Link>Our Team</Link>
              </div>
              <div>
                <Link>Contact</Link>
              </div>
              <div>
                <Link>Services</Link>
              </div>
              <div>
                <Link>Pricing</Link>
              </div>
            </nav>
          </div>
          <div className="pt-8 xl:pt-0 xl:ml-40">
            <h6 className="text-white text-xl tracking-[5px] pb-10">
              Helpful Links
            </h6>
            <nav className=" text-[#848788] space-y-6 text-xl">
              <div>
                <Link>About us</Link>
              </div>
              <div>
                <Link>Cookie Policy</Link>
              </div>
              <div>
                <Link>Privacy Policy</Link>
              </div>
            </nav>
          </div>
          <div className="pt-8 xl:pt-0 xl:ml-40">
            <h6 className="text-white text-xl tracking-[5px] pb-10">
              Follow Us
            </h6>
            Insta <br />
            facebook
          </div>
        </div>
      </footer>
      <div className="pt-14 xl:pt-28 text-lg text-[#848788]">
        <p>2023 &#169; Dezig IT | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
