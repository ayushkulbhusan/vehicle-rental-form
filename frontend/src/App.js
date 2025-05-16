import React, { useState } from 'react';
import Step1Name from './components/Step1Name';
import Step2Wheels from './components/Step2Wheels';
import Step3Type from './components/Step3Type';
import Step4Model from './components/Step4Model';
import Step5Date from './components/Step5Date';
import Confirmation from './components/Confirmation'; // Import here

function App() {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false); // track completion

  const handleNext = () => setStep(step + 1);
  const handleReset = () => {
    setFormData({});
    setStep(1);
    setCompleted(false);
  };

  return (
    <div>
      {!completed && step === 1 && (
        <Step1Name formData={formData} setFormData={setFormData} onNext={handleNext} />
      )}
      {!completed && step === 2 && (
        <Step2Wheels formData={formData} setFormData={setFormData} onNext={handleNext} />
      )}
      {!completed && step === 3 && (
        <Step3Type formData={formData} setFormData={setFormData} onNext={handleNext} />
      )}
      {!completed && step === 4 && (
        <Step4Model formData={formData} setFormData={setFormData} onNext={handleNext} />
      )}
      {!completed && step === 5 && (
        <Step5Date
          formData={formData}
          setFormData={setFormData}
          onNext={() => setCompleted(true)} // Mark complete on submit
        />
      )}
      {completed && <Confirmation onReset={handleReset} />}
    </div>
  );
}

export default App;
