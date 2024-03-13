import React, { useRef, useState, useEffect } from 'react';

const correctOTP = "123456";

function OtpInputWithValidation({ numberOfDigits, checkOtp }) {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState("");
  const otpBoxReference = useRef([]);

  useEffect(() => {
    if (checkOtp) {
      handleSubmit();
    }
  }, [checkOtp]); 

  const handleChange = (value, index) => {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  const handleBackspaceAndEnter = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    } else if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== numberOfDigits) {
      setOtpError("Please fill all the OTP digits.");
      return;
    }
    if (enteredOtp !== correctOTP) {
      setOtpError("❌ Wrong OTP Please Check Again");
    } else {
      setOtpError("all seems fine");
      // Here put the actual OTP verification logic

    }
  };

  return (
    <article>
      <div className='flex items-center gap-4'>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
            ref={(el) => otpBoxReference.current[index] = el}
            className="otp-input"
          />
        ))}
      </div>
      {otpError && <p className="otp-error">{otpError}</p>}
    </article>
  );
}

export default OtpInputWithValidation;
