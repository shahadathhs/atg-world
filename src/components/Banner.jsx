import { FaArrowLeft } from "react-icons/fa";
import bg1 from "../assets/banner/Rectangle 2.png";
import bg2 from "../assets/banner/Rectangle 3.png";

const Banner = () => {
  let user = true;

  return (
    <div className="h-80">
      <div className="relative">
        <img src={bg1} className="absolute z-10 container mx-auto h-80 object-cover" alt="" />
        <img src={bg2} className="absolute z-20 container mx-auto h-80 object-cover" alt="" />
        <div className="absolute z-30 p-5 text-white w-full container mx-auto
        flex justify-between items-center md:hidden">
          <div>
            <FaArrowLeft />
          </div>
          <div>
            {
              user
              ?
              <button className="border-2 p-2 rounded-lg">Join Group</button>
              :
              <button className="border-2 p-2 rounded-lg">Leave Group</button>
            } 
          </div>
        </div>
        <div className="p-5 absolute z-30 text-white top-44 md:left-36">
          <p className="text-2xl font-semibold">Computer Engineering</p>
          <p className="md:text-lg">142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;