import { FaSearch } from "react-icons/fa";
import logo from "../assets/nav/whole.png"

const Navbar = () => {
  return (
    <div className="p-3 hidden md:flex justify-between items-center gap-3 h-[75px]">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className="relative w-full max-w-sm">
        <input 
          type="text" 
          className="bg-base-200 p-2 pl-10 pr-4 rounded-full w-full" 
          placeholder="Search for your favorite groups in ATG"
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500">
          <FaSearch />
        </div>
      </div>

      <div className="font-bold flex items-center">
        <button className="btn">Create account</button> <span className="text-blue-500 hidden md:flex ml-2">It is free!</span>
      </div>

    </div>
  );
};

export default Navbar;