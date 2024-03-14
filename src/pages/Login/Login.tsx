import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import '../../components/Translations/translations';
import { useTranslation } from 'react-i18next';
import TranslateButton from '../../components/Translations/translateButton';

const LoginPage = () => {
  const { t } = useTranslation();

  const [IsPasswordStep, setIsPasswordStep] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();

  if (auth.currentUser != null)
  navigate("/personaldetails");

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
    <div className="bg-gray-100 flex flex-col items-center min-h-screen w-full h-screen">
<div className="w-full bg-green-100 flex h-16 justify-between items-center">
  <div className="flex items-center my-10">
    <img
      src="/assets/images/logo.svg"
      alt="Standard Chartered"
      className="h-12 pl-10"
    />
  </div>
  <div className="text-right h-16"> {/* Added flex-grow and text-right classes */}
    <TranslateButton />
  </div>
</div>


      <div className="flex flex-col md:flex-row md:space-x-8 w-full h-full">
        <div className="w-1/2 bg-blue-200 h-full flex flex-col justify-center items-center">
        <div className="mt-10 mb-8 top-0 left-0">
            {/* <img
              src="/assets/images/logo.svg"
              alt="Standard Chartered"
              className="h-12"
            /> */}
          </div>
          <h1 className="text-3xl font-bold mt-4">
          {t('Your portal for Online KYC')}
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
              <h1 className="text-xl font-bold">{t('Enter Your Password')}</h1>
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
              <h1 className="text-xl font-bold">{t('Enter Your Email')}</h1>
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
            {IsPasswordStep ? t("Login") : t("Continue")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
