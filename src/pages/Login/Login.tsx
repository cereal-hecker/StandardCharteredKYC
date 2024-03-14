import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase/firebase";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [IsPasswordStep, setIsPasswordStep] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const navigate = useNavigate();

  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();
    setIsPasswordStep(true);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged In Successfully");
      console.log(auth.currentUser);
    } catch (e) {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("New Account Created!");
    }
    navigate('/personaldetails')
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 p-4">
        <img src="/assets/images/logo.svg" alt="Company Logo" className="h-12" />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-8 w-full max-w-6xl p-8 rounded-lg shadow-md bg-white">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mt-4 md:mt-0">Welcome Back!</h1>
          <p className="text-lg mt-4">Sign in to continue.</p>
          <img src="/assets/images/video.png" alt="Online KYC" className="mt-8 md:max-w-md" />
        </div>
        <form onSubmit={IsPasswordStep ? handleOtpSubmit : handlePhoneNumberSubmit} className="md:w-1/2">
          {IsPasswordStep ? (
            <div>
              <h1 className="text-2xl font-semibold mb-4">Enter Your Password</h1>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-semibold mb-4">Enter Your Email</h1>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              {phoneError && <div className="text-red-500">{phoneError}</div>} {/* Conditional rendering */}
            </div>
          )}
          <button type="submit" className="mt-6 py-3 px-6 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300">{IsPasswordStep ? 'Login' : 'Continue'}</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
