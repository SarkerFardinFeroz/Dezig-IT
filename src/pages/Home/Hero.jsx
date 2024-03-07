import logo from "../../assets/images/logo.png";
const Hero = () => {
  return (
    <div
      className={`bg-[url('./heroImg.jpg')] bg-no-repeat bg-cover bg-center p-20 flex items-center justify-center  `}
    >
      <div className="flex-col justify-center items-center">
        <img className="w-48" src={logo} />
        <h2>WE BUILD DIGITAL EXPERIENCES</h2>
        <div>
          <div>WEBSITES</div>.<div>SEO</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
