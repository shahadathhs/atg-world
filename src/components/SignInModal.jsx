import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineCancel } from 'react-icons/md';
import pic from "../assets/Group 3.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import toast from 'react-hot-toast';

const SignInModal = ({ onClose, onSignUp }) => {
  const { login, googleLogin } = useContext(AuthContext);
  const [error,setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  // email login
  const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    login(email, password)
        .then((result) => {
          toast.success('Login successful!');
          form.reset()
          onClose();
          console.log(result.user)
        })
        .catch((error)=> {
          toast.error('Password or Email did not match!');
          setError(error.message);
        })
  }

  // google login
  // handle direct login
  const handleDirectLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        console.log(result.user);
        onClose();
        toast.success('Sign In Successful!');
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message)
        toast.error('Sign In Unsuccessful!');
      })
  };

  return (
    <div className="fixed inset-0 flex items-end md:items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 sm:h-auto sm:rounded-t-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <MdOutlineCancel size={24} />
        </button>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <div>
            <p className='font-bold text-xl p-5 pl-0'>Welcome Back!!!</p>
            {/* Sign in Form */}
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                {/* email */}
                <input type="email" placeholder='Email' name="email" required
                  className='p-4 border-2 bg-base-200 w-full' />
                {/* password */}
                <div className='relative'>
                  <input type={showPassword ? "text" : "password"} placeholder='Password' name="password" required
                    className='p-4 border-2 border-t-0 bg-base-200 w-full' />
                  <button type="button" onClick={toggleShowPassword} className="absolute right-3 top-5">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              {/* submit button */}
              <div className='flex items-center justify-between'>
                <button type="submit" className="btn btn-secondary bg-blue-500 border-0 md:w-full mb-2">
                  Login
                </button>
                
                <button onClick={onSignUp} type="button" className="text-blue-500 underline flex md:hidden">
                  Or, Sign Up
                </button>
              </div>
            </form>
            {/* error */}
            {
              error && <small className='text-red-500'>{error}</small>
            }
            
            {/* google signIn */}
            <button onClick={() => handleDirectLogin(googleLogin)}
            className='btn btn-outline border-gray-300 my-6 w-full'>
              <FcGoogle /> Sign in with Google
            </button>
          </div>

          <div className='hidden md:flex flex-col'>
              <p>
                Do not have an account?{" "}
                <button onClick={onSignUp} type="button" className="text-blue-500 underline">
                  Sign Up
                </button>
              </p>
              <img src={pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;

SignInModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};
