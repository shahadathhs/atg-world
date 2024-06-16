import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { LuUsers } from "react-icons/lu";

const PostNav = () => {
  let user = true;

  return (
    <div>
      <div className="hidden md:flex p-4 border-b-2 justify-between items-center">
        <div className="space-x-4">
          <button className="font-bold">
            All Posts(32)
          </button>
          <button>Article</button>
          <button>Event</button>
          <button>Education</button>
          <button>Job</button>
        </div>
        <div className="space-x-3">
          <button className="btn">Write a Post <IoMdArrowDropdownCircle /></button>
          {
            user
            ?
            <button className="btn bg-blue-600 text-white">Join Group <LuUsers /></button>
            :
            <button className="btn"> <FaArrowRightFromBracket /> Leave Group </button>
          }
        </div>
      </div>
      <div className="flex md:hidden p-4 border-b-2 justify-between items-center">
        <button className="font-bold">
          Posts(32)
        </button>
        <button className="btn">Filter: All <IoMdArrowDropdownCircle /></button>
      </div>
    </div>
  );
};

export default PostNav;