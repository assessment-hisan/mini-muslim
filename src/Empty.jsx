import { useState, useEffect } from "react";
import "./App.css";

import Game from "./components/Game";
import Home from "./components/Home";

import homeFilled from "./assets/nav-svg/home.svg";
import homeOutline from "./assets/nav-svg/homeUN.svg";
import playFilled from "./assets/nav-svg/play.svg";
import playOutline from "./assets/nav-svg/playUN.svg";
import profileFilled from "./assets/nav-svg/profile.svg";
import profileOutline from "./assets/nav-svg/profileUN.svg";

const tabs = [
  { id: "home", label: "Home", filled: homeFilled, outline: homeOutline },
  { id: "game", label: "Game", filled: playFilled, outline: playOutline },
  { id: "profile", label: "Profile", filled: profileFilled, outline: profileOutline },
];

// Modal Component
const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
      <div className="bg-white p-6 h-screen w-full rounded shadow-lg">
        <div className="fixed inset-0 z-0">
          <img
            src="/main.jpg"
            alt="Background"
            className="object-cover w-full h-full opacity-80 "
          />
        </div>
        {/* You can uncomment this section if you want a header and a "Continue" button */}
        {/* <h2 className="text-xl font-bold">Welcome!</h2>
        <p className="mt-2">Thank you for using our app. Click "Continue" to get started.</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded animate-bounce"
        >
          Continue
        </button> */}
      </div>
      <div className="w-full h-32 bg-blue-700 flex justify-center items-center z-50">
        <button
          onClick={onClose}
          className="px-6 py-2 text-white bg-blue-800 rounded hover:bg-blue-900"
        >
          Start Now
        </button>
      </div>
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
        {activeTab === "profile" && (
          <div className="p-6 text-center">
            <h1 className="text-3xl font-bold">Profile Section</h1>
            <p className="text-gray-600 mt-4">View and edit your profile details.</p>
          </div>
        )}
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
