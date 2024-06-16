import PropTypes from 'prop-types';

const SignInModal = ({ onClose, onSignUp }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 sm:bottom-0 sm:h-auto sm:rounded-t-lg">
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
          <button onClick={onClose} className="btn w-full mt-2">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;

SignInModal.propTypes = {
  onClose: PropTypes.node,
  onSignUp: PropTypes.node,
}