import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

interface OnboardingStep {
  title: string;
  description: string;
  image: string;
}

export const OnBoardingScreen = (): JSX.Element => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps: OnboardingStep[] = [
    {
      title: "Welcome to Mathisi.io\nwhere learning meets innovation!",
      description: "Empowering your journey through cutting-edge IT education and expertise",
      image: "public/isolation-mode.svg"
    },
    {
      title: "Learn at Your Own Pace\nAnytime, Anywhere",
      description: "Access our comprehensive curriculum and expert-led courses from any device",
      image: "public/isolation-mode.svg"
    },
    {
      title: "Interactive Learning\nExperience",
      description: "Engage with hands-on projects and real-world applications",
      image: "public/isolation-mode.svg"
    },
    {
      title: "Join Our Learning\nCommunity",
      description: "Connect with peers and industry experts to enhance your learning journey",
      image: "public/isolation-mode.svg"
    }
  ];

  const handleSkip = () => {
    setCurrentStep(steps.length - 1);
  };

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to home screen when onboarding is complete
      navigate("/home");
    }
  };

  return (
    <div className="bg-[#F8F9FB] flex flex-col items-center justify-between min-h-screen px-6 py-12">
      {/* Top Section */}
      <div className="w-full flex justify-end">
        {currentStep < steps.length - 1 && (
          <Button
            variant="outline"
            className="text-[#667085] text-sm font-semibold bg-transparent border-none hover:bg-gray-50"
            onClick={handleSkip}
          >
            Skip
          </Button>
        )}
      </div>

      {/* Middle Section */}
      <div className="flex flex-col items-center gap-8">
        {/* Main illustration */}
        <div className="relative w-full max-w-[346px] aspect-[346/314]">
          <img
            className="w-full h-full object-contain"
            alt="Mathisi.io illustration"
            src={steps[currentStep].image}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-[#1D2939] text-2xl font-semibold leading-[30px] max-w-[300px] whitespace-pre-line">
            {steps[currentStep].title}
          </h1>
          
          <p className="text-[#667085] text-base leading-6 max-w-[303px]">
            {steps[currentStep].description}
          </p>
        </div>

        {/* Pagination dots */}
        <div className="flex gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentStep ? "bg-[#003096]" : "bg-[#D0D5DD]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <Button 
        className="w-full max-w-[335px] h-[44px] bg-[#003096] text-white font-semibold rounded-lg hover:bg-[#002470] transition-colors"
        onClick={handleContinue}
      >
        {currentStep === steps.length - 1 ? "Get Started" : "Continue"}
      </Button>
    </div>
  );
};