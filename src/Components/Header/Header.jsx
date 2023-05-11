import logo from "../../assets/logo1.png";
const Header = () => {
  return (
    <header className=" bg-[#392015] text-center p-2">
      <div className="flex mx-auto w-72 space-x-2 items-center">
        <img src={logo} className="w-12 h-12 " alt="" />
        <h2 className="text-3xl text-white font-bold font-Pacifico">
          Coffee Master
        </h2>
      </div>
    </header>
  );
};

export default Header;
