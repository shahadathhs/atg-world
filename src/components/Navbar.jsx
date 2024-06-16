import { FaSearch } from "react-icons/fa";
import logo from "../assets/nav/whole.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import toast from "react-hot-toast";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful!");
      })
      .catch(() => {
        toast.error("An error happened!");
      });
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="p-3 flex justify-between items-center gap-3 h-[75px]">
        <div>
          <img src={logo} alt="" />
        </div>

        <div className="hidden md:flex">
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
        </div>
        {/* user management */}
        <div className="font-bold flex items-center">
          {/* create account / logout */}
          {user ? (
            <div>
              <div className="dropdown dropdown-hover dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">
                  <div className="avatar space-x-2 items-center">
                    <div className="w-8 rounded">
                      {user?.image ? (
                        <img src={user?.image} alt="User avatar" />
                      ) : (
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt="Default avatar"
                        />
                      )}
                    </div>
                    <p>{user?.displayName || "anonymous user"}</p>
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu menu-sm shadow bg-base-100 rounded-box"
                >
                  <li>
                    <button onClick={handleSignOut} className="btn btn-sm btn-ghost">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex w-full gap-3 items-center">
              <button
                onClick={() => setShowSignInModal(true)}
                className="btn"
              >
                Create account
              </button>
              <span className="text-blue-500 hidden md:flex ml-2">
                It is free!
              </span>
            </div>
          )}
        </div>
      </div>
      {showSignInModal && (
        <SignInModal
          onClose={() => setShowSignInModal(false)}
          onSignUp={() => {
            setShowSignInModal(false);
            setShowSignUpModal(true);
          }}
        />
      )}
      {showSignUpModal && (
        <SignUpModal
          onClose={() => setShowSignUpModal(false)}
          onSignIn={() => {
            setShowSignUpModal(false);
            setShowSignInModal(true);
          }}
        />
      )}
    </div>
  );
};

export default Navbar;