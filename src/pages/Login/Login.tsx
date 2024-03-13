import React, { useState } from 'react';
import './LoginPage.css'; // Make sure this path is correct
import OtpInputWithValidation from '../../components/otpInputBox/otpInput';

const LoginPage = () => {
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [checkOtp, setCheckOtp] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    // Simple validation for a 10-digit phone number
    if (userInput.trim().length !== 10 || isNaN(userInput)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return; // Prevent submission if validation fails
    }
    // Reset error state if validation passes
    setPhoneError('');
    console.log('Phone number submitted:', userInput);
    setIsOtpStep(true); // Move to OTP step
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setCheckOtp(true);
    console.log('OTP submitted:', userInput);
    // OTP submission logic here
  };

  return (
    <div className="login-page">
      <form onSubmit={isOtpStep ? handleOtpSubmit : handlePhoneNumberSubmit}>
        {isOtpStep ? (
          <div>
            <h1>Enter Your One Time Password</h1>
            <OtpInputWithValidation
              numberOfDigits={6}
              checkOtp={checkOtp}
            />
          </div>
        ) : (
          <div>
            <h1>Enter Your Phone Number</h1>
            <input
              type="tel"
              id="phone-number"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter your phone number"
            />
            {phoneError && <div className="phone-error">{phoneError}</div>} {/* Conditional rendering */}
          </div>
        )}
        <button type="submit" disabled={isOtpStep ? false : userInput.trim().length !== 10 || isNaN(userInput)}>{isOtpStep ? 'Submit OTP' : 'Continue'}</button>
      </form>
    </div>
  );
};

export default LoginPage;
