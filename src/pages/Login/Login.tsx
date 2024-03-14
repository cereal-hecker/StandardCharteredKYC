import { useState } from 'react';
import './LoginPage.css'; // Make sure this path is correct
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase/firebase";
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
    navigate('/personaldetails')
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
              placeholder="Enter your Email"
            />
            {phoneError && <div className="phone-error">{phoneError}</div>} {/* Conditional rendering */}
          </div>
        )}
        <button type="submit" >{IsPasswordStep ? 'Login' : 'Continue'}</button>
      </form>
    </div>
  );
};

export default LoginPage;
