import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [IsPasswordStep, setIsPasswordStep] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
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
    navigate("/personaldetails");
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center min-h-screen h-screen">
      <div className="flex flex-col md:flex-row md:space-x-8 w-full h-full">
        <div className="w-1/2 bg-blue-200 h-full flex flex-col justify-center items-center">
        <div className="mt-10 mb-8 top-0 left-0">
            <img
              src="/assets/images/logo.svg"
              alt="Standard Chartered"
              className="h-12"
            />
          </div>
          <h1 className="text-3xl font-bold mt-4">
            Your portal for Online KYC
          </h1>
          <img
            src="/assets/images/video.png"
            alt="Online KYC"
            className="mt-4 w-3/4"
          />
        </div>
        <form
          onSubmit={IsPasswordStep ? handleOtpSubmit : handlePhoneNumberSubmit}
          className="w-1/2 flex flex-col justify-center items-center"
        >
          {IsPasswordStep ? (
            <div>
              <h1 className="text-xl font-bold">Enter Your Password</h1>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md"
              />
            </div>
          ) : (
            <div>
              <h1 className="text-xl font-bold">Enter Your Email</h1>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full py-2 px-4 mt-2 border border-gray-300 rounded-md"
              />
              {phoneError && <div className="text-red-500">{phoneError}</div>}{" "}
              {/* Conditional rendering */}
            </div>
          )}
          <button
            type="submit"
            className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md"
          >
            {IsPasswordStep ? "Login" : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
