import React, { useEffect, useState } from 'react';
import './LoginPage.css'; // Make sure this path is correct
import { doSignInWithPhoneNumber } from '../firebase/auth'

import { RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase/firebase";


const LoginPage = () => {
  const [IsPasswordStep, setIsPasswordStep] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkOtp, setCheckOtp] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  //firebase integration for login authentication
  // useEffect(()=>{
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     "recaptcha-container",
  //     { "size": "invisible" }
  //   );
  // },[]);

  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();
    setIsPasswordStep(true);
  };

  const handleOtpSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged In Successfully");
      console.log(auth.currentUser);
    } catch(e){
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("New Account Created!");
    }


  };

  return (
    <div className="login-page">
      <form onSubmit={IsPasswordStep ? handleOtpSubmit : handlePhoneNumberSubmit}>
        {IsPasswordStep ? (
          <div>
            <h1>Enter Your Password</h1>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
          </div>
        ) : (
          <div>
            <h1>Enter Your Email</h1>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {phoneError && <div className="phone-error">{phoneError}</div>} {/* Conditional rendering */}
          </div>
        )}
        <button type="submit" >{IsPasswordStep ? 'Submit OTP' : 'Continue'}</button>
      </form>
    </div>
  );
};

export default LoginPage;
