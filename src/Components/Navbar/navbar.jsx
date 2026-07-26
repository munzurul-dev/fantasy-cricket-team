import logoimg from "../../assets/logo.png";
import usdtImg from "../../assets/dollar_1.png";
const Navbar = ({AvailableBalance}) => {
    return (
         <div className=" max-w-6xl mx-auto navbar bg-base-100">
        <div className="flex-1">
          <a className=" text-xl">
            <img className=" h-12.5" src={logoimg} alt="" />
          </a>
        </div>
        <div className="items-center p-6">
          <ul className="flex gap-4 items-center font-bold text-xs text-white lg:text-[#000000e1]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Fixture</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Schedules</a>
            </li>
            <button className="flex btn rounded-xl">
              <span >{AvailableBalance}</span>
              <span >$</span>
              <img className="ml-2" src={usdtImg} alt=""></img>
            </button>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;