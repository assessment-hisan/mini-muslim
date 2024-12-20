import { useState, useEffect } from "react";
import "./App.css";
import { FcAbout } from "react-icons/fc";

import Game from "./components/Game";
import Home from "./components/Home";
import About from './components/About'
import homeFilled from "./assets/nav-svg/home.svg";
import homeOutline from "./assets/nav-svg/homeUN.svg";
import playFilled from "./assets/nav-svg/play.svg";
import playOutline from "./assets/nav-svg/playUN.svg";
import profileFilled from "./assets/nav-svg/profile.svg";
import profileOutline from "./assets/nav-svg/profileUN.svg";

const tabs = [
  { id: "home", label: "Home", filled: homeFilled, outline: homeOutline },
  { id: "game", label: "Game", filled: playFilled, outline: playOutline },
  { id: "profile", label: "About", filled: profileFilled, outline: profileOutline },
];




const Modal = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0); // Start from step 0
  const content = [
    {
      id: 1,
      text: "Islamic Routines",
      sub: "Make daily dhikr and dua practices a habit by integrating them into a fun game",
    },
    {
      id: 2,
      text: "Dhikr and Dua",
      sub: "Make your spiritual practice a daily habit, one level at a time.",
    },
    {
      id: 3,
      text: "Moral Values",
      sub: "Through consistent engagement, children will develop a strong foundation of Islamic values",
    },
  ];

  useEffect(() => {
    if (currentStep === 0) {
      const timer = setTimeout(() => {
        setCurrentStep(1); // Move to the next step after 500ms
      }, 3000);
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [currentStep]);

  const handleSkip = () => {
    setCurrentStep(4); // Skip to the "Start Now" section
  };

  const handleContinue = () => {
    setCurrentStep((prevStep) => prevStep + 1); // Go to the next section
  };

  const handleTouch = () => {
    if (currentStep === 0) {
      setCurrentStep(1); // Move to the next step if user touches the div
    }
  };

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center">
      {/* Logo Section (Step 0) */}
      {currentStep === 0 && (
        <div
          className="bg-blue-900 h-screen w-full flex items-center justify-center relative"
          onTouchStart={handleTouch} // Detect touch interaction
        >
          {/* Logo */}
          <img
            src="/logowhite.png" // Path to your white logo
            alt="Logo"
            className="z-10 w-72" // Adjust size as needed
          />
          {/* Background effect (optional) */}
          <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        </div>
      )}

      {/* Skip/Continue Section (Steps 1–3) */}
      {currentStep >= 1 && currentStep <= 3 && (
        <div className="bg-white p-6 h-screen w-full rounded shadow-lg relative">
          {/* Background image for the first three sections */}
          <div className="fixed inset-0 z-0">
            <img
              src={`/b${currentStep}.jpg`}
              alt={`Section ${currentStep}`}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Content */}
          <div className="absolute top-1/3 z-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl font-semibold font-mont mb-1 text-white">
              {content[currentStep - 1].text} {/* Subtract 1 to match the array index */}
            </h2>
            <p className="text-base mb-4 text-gray-200 text-center font-mont max-w-[22rem] leading-5 mx-auto">
              {content[currentStep - 1].sub} {/* Subtract 1 to match the array index */}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <button
                onClick={handleContinue}
                className="animate-bounce px-8 py-2 bg-blue-900 text-white rounded-full ring-1 ring-blue-900 hover:bg-blue-700 font-bold text-xl"
              >
                Continue
              </button>
              <button
                onClick={handleSkip}
                className="px-6 py-2 bg-white font-semibold text-xl text-blue-900 ring-1 ring-blue-900 rounded-full hover:bg-red-700"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Start Now Section (Step 4) */}
      {currentStep === 4 && (
        <div className="bg-white p-6 h-screen w-full rounded shadow-lg relative flex items-end justify-center">
          {/* Background image for the "Start Now" section */}
          <div className="fixed inset-0 z-0">
            <img
              src="/main.png"
              alt="Background"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Start Now Section */}
          <button
            onClick={onClose}
            className="relative z-10 font-lucky py-2 px-4 pb-20 text-blue-100 text-5xl animate-bounce rounded-lg"
          >
            Start Now
          </button>
        </div>
      )}
    </div>
  );
};





function Empty() {
  const [activeTab, setActiveTab] = useState("home");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if modal has been shown before
    const hasSeenModal = sessionStorage.getItem("hasSeenModal");

    if (!hasSeenModal) {
      setShowModal(true); // Show modal only once
      sessionStorage.setItem("hasSeenModal", "true");
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      {/* Main Content */}
      <div className="w-full max-w-md flex-1 bg-white overflow-auto">
        {activeTab === "home" && <Home setActiveTab={setActiveTab} />}
        {activeTab === "game" && <Game />}
        {activeTab === "profile" && <About/> }
      </div>

      {/* Bottom Navigation Bar */}
      <div className="w-full fixed z-30 bottom-0 max-w-md mx-auto bg-white shadow-md flex justify-around py-3 border-t">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center ${
              activeTab === tab.id ? "text-orange-500" : "text-gray-400"
            }`}
          >
            <img
              src={activeTab === tab.id ? tab.filled : tab.outline}
              alt={tab.label}
              className="w-8 h-8"
            />
            <span className="text-sm mt-1">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Modal for First-Time Users */}
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
}

export default Empty;
