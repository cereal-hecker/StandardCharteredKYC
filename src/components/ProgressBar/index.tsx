import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./progress.css";
import { TiTick } from "react-icons/ti";
import TranslateButton from '../../components/Translations/translateButton';

const Progress = () => {
  const steps = [
    "Personal Details",
    "Aadhar Card",
    "Pan Card",
    "Signature",
    "Done",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const location = useLocation();
  console.log(setComplete)
  useEffect(() => {
    const path = location.pathname;
    const currentStepIndex = steps.findIndex((step) => path.includes(step.toLowerCase().replace(/\s+/g, '')));
    
    // Ensure that currentStepIndex is not -1 (step not found) and increment it by 1
    if (currentStepIndex !== -1) {
      setCurrentStep(currentStepIndex + 1);
    }
  }, [location.pathname, steps]);
  

  return (
    <>
      <div className="flex justify-between bg-white py-10">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <Link to={`/${step.toLowerCase().replace(/\s+/g, '')}`} className="text-gray-500">{step}</Link>
          </div>
        ))}
              <TranslateButton />

      </div>
      {/* {!complete && (
        <button
          className="btn"
          onClick={() => {
            setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )} */}
    </>
  );
};

export default Progress;
