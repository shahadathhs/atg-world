import PropTypes from 'prop-types';

const SignUpModal = ({ onClose, onSignIn }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 sm:bottom-0 sm:h-auto sm:rounded-t-lg">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        {/* Sign Up Form */}
        <form>
          <button className="btn w-full mb-2">Sign Up</button>
          <p>
            Already have an account?{" "}
            <button onClick={onSignIn} className="text-blue-500 underline">
              Sign In
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

export default SignUpModal;

SignUpModal.propTypes = {
  onClose: PropTypes.node,
  onSignIn: PropTypes.node,
}