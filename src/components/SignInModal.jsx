import PropTypes from 'prop-types';
import { MdOutlineCancel } from 'react-icons/md';

const SignInModal = ({ onClose, onSignUp }) => {
  return (
    <div className="fixed inset-0 flex items-end md:items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 sm:h-auto sm:rounded-t-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <MdOutlineCancel size={24} />
        </button>
        <h2 className="text-2xl mb-4">Sign In</h2>
        {/* Sign In Form */}
        <form>
          <button className="btn w-full mb-2">Sign In</button>
          <p>
            Do not have an account?{" "}
            <button onClick={onSignUp} className="text-blue-500 underline">
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;

SignInModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};
