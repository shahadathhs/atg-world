import { useContext, useState } from "react";
import { BsExclamationCircle, BsThreeDots } from "react-icons/bs";
import pic1 from "../assets/posts/Rectangle 5.png";
import type1 from "../assets/posts/✍️ Article.png";
import profile1 from "../assets/posts/Rectangle 3 (1).png";
import { IoEyeOutline, IoShareSocialOutline } from "react-icons/io5";
import pic2 from "../assets/posts/Rectangle 5 (1).png";
import type2 from "../assets/posts/🔬️ Education.png";
import profile2 from "../assets/posts/Rectangle 3 (2).png";
import pic3 from "../assets/posts/Rectangle 5 (2).png";
import type3 from "../assets/posts/🗓️ Meetup.png";
import profile3 from "../assets/posts/Rectangle 3 (3).png";
import { IoMdCalendar, IoMdClipboard } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import type4 from "../assets/posts/💼️ Job.png";
import profile4 from "../assets/posts/Rectangle 3 (4).png";
import { MdOutlineCancel, MdOutlineEdit } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

import follow1 from "../assets/follow/Rectangle 6.png";
import follow2 from "../assets/follow/Rectangle 6 (1).png";
import follow3 from "../assets/follow/Rectangle 6 (2).png";
import follow4 from "../assets/follow/Rectangle 6 (3).png";
import { AuthContext } from './../Providers/AuthProviders';

const Posts = () => {
  const {user} = useContext(AuthContext);

  const followItems = [
    { img: follow1, text: "Leisure" },
    { img: follow2, text: "Activism" },
    { img: follow3, text: "MBA" },
    { img: follow4, text: "Philosophy" }
  ]
  const [isFollowing, setIsFollowing] = useState([false, false, false, false]);

  const handleFollowClick = (index) => {
    setIsFollowing((prevState) => {
      const newFollowState = [...prevState];
      newFollowState[index] = !newFollowState[index];
      return newFollowState;
    });
  };

  return (
    <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* post div */}
      <div className="col-span-1 md:col-span-2">
        {/* post 1 */}
        <div className="border-[1px] shadow-sm rounded-md mt-3">
          <img src={pic1} className="w-full" />
          <div className="p-3 space-y-3">
            <img src={type1} alt="" />
            
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold max-w-md">
              What if famous brands had regular fonts? Meet RegulaBrands!
              </p>
              <BsThreeDots />
            </div>
            
            <p className="text-gray-400">
            I have worked in UX for the better part of a decade. From now on, 
            I plan to rei…I have worked in UX for the better part of a decade. 
            From now on, I plan to reinvigorate my career by exp.... 
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <img src={profile1} alt="" /> 
                <div>
                  <p className="font-bold text-xl">Sarthak Kamra</p>
                  <p className="flex md:hidden gap-2 items-center font-semibold"><IoEyeOutline />1.4k views</p>
                </div> 
              </div>

              <div className="flex gap-3 items-center">
                <p className="hidden  md:flex gap-2 items-center font-semibold"><IoEyeOutline />1.4k views</p>
                <button className="btn"><IoShareSocialOutline /> <span className="flex md:hidden">Share</span> </button>
              </div>
            </div>
          </div>
        </div>

        {/* post 2 */}
        <div className="border-[1px] shadow-sm rounded-md mt-3">
          <img src={pic2} className="w-full" />
          <div className="p-3 space-y-3">
            <img src={type2} alt="" />
            
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold max-w-md">
              Tax Benefits for Investment under National 
              Pension Scheme launched by Government
              </p>
              <BsThreeDots />
            </div>
            
            <p className="text-gray-400">
            I have worked in UX for the better part of a decade. From now on, 
            I plan to rei…I have worked in UX for the better part of a decade. 
            From now on, I plan to reinvigorate my career by exp.... 
            </p>

            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <img src={profile2} alt="" /> 
                <div>
                  <p className="font-bold text-xl">Sarah West</p>
                  <p className="flex md:hidden gap-2 items-center font-semibold"><IoEyeOutline />1.4k views</p>
                </div> 
              </div>

              <div className="flex gap-3 items-center">
                <p className="hidden  md:flex gap-2 items-center font-semibold"><IoEyeOutline />1.4k views</p>
                <button className="btn"><IoShareSocialOutline /> <span className="flex md:hidden">Share</span> </button>
              </div>
            </div>

          </div>
        </div>

        {/* post 3 */}
        <div className="border-[1px] shadow-sm rounded-md mt-3">
          <img src={pic3} className="w-full" />
          <div className="p-3 space-y-3">
            <img src={type3} alt="" />
            
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold max-w-md">
              Finance & Investment Elite Social Mixer @Lujiazui
              </p>
              <BsThreeDots />
            </div>
            
            <div className="flex gap-5">
              <div className="flex gap-1 items-center">
                <IoMdCalendar /> <p>Fri, 12 Oct, 2018</p>
              </div>
              <div className="flex gap-1 items-center">
                <CiLocationOn /> <p>Ahmedabad, India</p>
              </div>
            </div>

            <button className="btn btn-outline text-[#E56135] w-full">
              Visit Website
            </button>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <img src={profile3} alt="" /> 
                <div>
                  <p className="font-bold text-xl">Ronal Jones</p>
                  <p className="flex md:hidden gap-2 items-center font-semibold"><IoEyeOutline />1.4k views</p>
                </div> 
              </div>

              <div className="flex gap-3 items-center">
                <p className="hidden  md:flex gap-2 items-center font-semibold"><IoEyeOutline />1.4k views</p>
                <button className="btn"><IoShareSocialOutline /> <span className="flex md:hidden">Share</span> </button>
              </div>
            </div>
          </div>
        </div>

        {/* post 4 */}
        <div className="border-[1px] shadow-sm rounded-md mt-3">
          <div className="p-3 space-y-3">
            <img src={type4} alt="" />
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold max-w-md">
              Software Developer
              </p>
              <BsThreeDots />
            </div>
            
            <div className="flex gap-5">
              <div className="flex gap-1 items-center">
                <IoMdClipboard /> <p>Innovaccer Analytics Private Ltd.</p>
              </div>
              <div className="flex gap-1 items-center">
                <CiLocationOn /> <p>Noida, India</p>
              </div>
            </div>

            <button className="btn btn-outline text-[#02B875] w-full">
              Apply on Times jobs
            </button>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <img src={profile4} alt="" /> 
                <div>
                  <p className="font-bold text-xl">Joseph Gray</p>
                  <p className="flex md:hidden gap-2 items-center font-semibold"><IoEyeOutline />1.4k views</p>
                </div> 
              </div>

              <div className="flex gap-3 items-center">
                <p className="hidden  md:flex gap-2 items-center font-semibold"><IoEyeOutline />1.4k views</p>
                <button className="btn"><IoShareSocialOutline /> <span className="flex md:hidden">Share</span> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* side div */}
      <div className="hidden md:flex mt-3">
        {
          user
          ?
          <div className="w-full">
            <div className="border-b-2 flex justify-between p-3 items-center">
              <div className="flex gap-1 items-center text-gray-500">
                <CiLocationOn /> <p>Enter your location</p>
              </div>
              <MdOutlineCancel />
            </div>
            
            <div className="flex gap-2 items-center p-3">
              <div>
                <BsExclamationCircle/> 
              </div>
              <p className="text-gray-500">
              Your location will help us serve better and extend a personalized experience.
              </p>
            </div>

            <div>
              <div className="flex gap-2 items-center justify-center p-3 text-lg font-bold">
                <AiFillLike /> <p>Recommended Groups</p>
              </div>

              <div>
                {followItems.map((group, index) => (
                  <div key={index} className="flex justify-between items-center p-3">
                    <div className="flex gap-2 items-center p-3">
                      <img src={group.img} alt="" />
                      <p>{group.text}</p>
                    </div>
                    <button
                      className="btn"
                      onClick={() => handleFollowClick(index)}
                    >
                      {isFollowing[index] ? "Unfollow" : "Follow"}
                    </button>
                  </div>
                ))}

                <p className="text-blue-500 text-end">See more...</p>
              </div>
            </div>
          </div>
          :
          <div className="w-full">
            <div className="border-b-2 flex justify-between p-3 items-center">
              <div className="flex gap-1 items-center font-semibold">
                <CiLocationOn /> <p>Noida, India</p>
              </div>
              <MdOutlineEdit />
            </div>
            <div className="flex gap-2 items-center p-3">
              <div>
                <BsExclamationCircle/> 
              </div>
              <p className="text-gray-500">
              Your location will help us serve better and extend a personalized experience.
              </p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Posts;
