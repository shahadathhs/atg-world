import Posts from "./components/Posts"
import { FaArrowLeft } from "react-icons/fa";
import bg1 from "./assets/banner//Rectangle 2.png";
import bg2 from "./assets/banner/Rectangle 3.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import Navbar from "./components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import toast from "react-hot-toast";

function App() {
  const { user } = useContext(AuthContext);
  const [hasJoined, setHasJoined] = useState(false);

  const handleJoinGroup = () => {
    if (user) {
      setHasJoined(true);
      toast.success('Successfully Joined The Group!')
    } else {
      toast.error('Please log in first!')
    }
  };

  const handleLeaveGroup = () => {
    setHasJoined(false);
    toast.success('Successfully Left The Group!')
  };
  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <Navbar />
      
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
            {/* join / leave button */}
            <div>
              {
                hasJoined 
                ? 
                <button onClick={handleLeaveGroup} className="border-2 p-2 rounded-lg">Leave Group</button>
                :
                <button onClick={handleJoinGroup} className="border-2 p-2 rounded-lg">Join Group</button>
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
      <div className="sticky top-[75px] z-40 bg-white shadow-md">
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
              hasJoined 
              ?
              <button onClick={handleLeaveGroup} className="btn bg-blue-600 text-white">Leave Group <FaArrowRightFromBracket /></button>
              :
              <button onClick={handleJoinGroup} className="btn">Join Group <LuUsers /></button>
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
