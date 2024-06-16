import Posts from "./components/Posts"
import logo from "./assets/nav/whole.png"
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import bg1 from "./assets/banner//Rectangle 2.png";
import bg2 from "./assets/banner/Rectangle 3.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { LuUsers } from "react-icons/lu";

function App() {
  let user = true;


  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
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
      </div>
      
      {/* Banner */}
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
      
      {/* PostNav */}
      <div className="sticky top-0 md:top-[75px] z-40 bg-white shadow-md">
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
              {/* join / leave button */}
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
      </div>
      
      {/* Posts */}
      <Posts />
    </div>
  )
}

export default App
