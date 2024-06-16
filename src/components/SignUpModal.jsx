import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import pic from "../assets/Group 3.png";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from './../Providers/AuthProviders';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const SignUpModal = ({ onClose, onSignIn }) => {
  const { createUser, updateUserProfile, googleLogin, logOut } = useContext(AuthContext);
  const [error,setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [formValues, setFormValues] = useState({
    password: '',
    confirmPassword: '',
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === 'confirmPassword') {
      setPasswordMatch(value === formValues.password);
    }
  };

  // email sign up
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = firstName + ' ' + lastName;
    const image = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    console.log({ name, email, password, confirmPassword });

    if (password === confirmPassword) {
      // Handle form submission (e.g., API call)
      console.log("Form submitted successfully!");
      //create user and update profile
      createUser(email, password)
      .then(() => {
        logOut();
        // toast.success('Register successful!');
        updateUserProfile(name, image)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Register successful!",
              text: "Now You Can Login To Your Account!"
            });
            form.reset();
            onClose();
          });
      })
      .catch(error=> {
        console.log(error.message)
        setError(error.message)
      })
    } else {
      console.log("Passwords do not match!");
      toast.error('Passwords do not match!');
    }
  };

  // google login
  // handle direct login
  const handleDirectLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        console.log(result.user);
        onClose();
        toast.success('Sign Up Successful!');
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message)
        toast.error('Sign Up Unsuccessful!');
      })
  };

  return (
    <div className="fixed inset-0 flex items-end md:items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 sm:h-auto sm:rounded-t-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <MdOutlineCancel size={24} />
        </button>
        <h2 className="text-[#008A45] mb-4 text-sm hidden md:flex">
          Let us learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <div>
            <p className='font-bold text-xl p-5 pl-0'>Create Account</p>
            {/* Sign Up Form */}
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                {/* name */}
                <div className='flex w-full'>
                  <input type="text" placeholder='First Name' name='firstName' required
                    className='p-4 border-2 bg-base-200 w-full' />
                  
                  <input type="text" placeholder='Last Name' name='lastName' required
                    className='p-4 border-2 border-l-0 bg-base-200 w-full' />
                </div>
                {/* email */}
                <input type="email" placeholder='Email' name="email" required
                  className='p-4 border-2 border-t-0 bg-base-200 w-full' />
                {/* password */}
                <div className='relative'>
                  <input type={showPassword ? "text" : "password"} placeholder='Password' name="password" required
                    className='p-4 border-2 border-t-0 bg-base-200 w-full'
                    value={formValues.password} onChange={handlePasswordChange} />
                  <button type="button" onClick={toggleShowPassword} className="absolute right-3 top-5">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {/* confirm password */}
                <div className='relative'>
                  <input type={showPassword ? "text" : "password"} placeholder='Confirm Password' name="confirmPassword" required
                    className={`p-4 border-2 border-t-0 bg-base-200 w-full ${!passwordMatch && "border-red-500"}`}
                    value={formValues.confirmPassword} onChange={handlePasswordChange} />
                  <button type="button" onClick={toggleShowPassword} className="absolute right-3 top-5">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {!passwordMatch && <p className="text-red-500 text-sm">Passwords do not match</p>}
                </div>
              </div>
              {/* submit button */}
              <div className='flex items-center justify-between'>
                <button type="submit" className="btn btn-secondary bg-blue-500 border-0 md:w-full mb-2">
                  Create Account
                </button>
                
                <button onClick={onSignIn} type="button" className="text-blue-500 underline flex md:hidden">
                  Or, Sign In
                </button>
              </div>
            </form>
            {/* error */}
            {
              error && <small className='text-red-500'>{error}</small>
            }
            
            {/* google signUp */}
            <button onClick={() => handleDirectLogin(googleLogin)}
            className='btn btn-outline border-gray-300 my-6 w-full'>
              <FcGoogle /> Sign up with Google
            </button>

            <p className='p-2 flex md:hidden max-w-sm text-center mx-auto'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
          </div>

          <div className='hidden md:flex flex-col'>
              <p>
                Already have an account?{" "}
                <button onClick={onSignIn} type="button" className="text-blue-500 underline">
                  Sign In
                </button>
              </p>
              <img src={pic} alt="" />
              <p className='p-2 max-w-sm text-center mx-auto'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;

SignUpModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};