import { useState } from "react";
import "./App.css";

import Game from "./components/Game";
import Home from "./components/Home";

import homeFilled from "./assets/nav-svg/home.svg";
import homeOutline from "./assets/nav-svg/homeUN.svg";
import playFilled from "./assets/nav-svg/play.svg";
import playOutline from "./assets/nav-svg/playUN.svg";
import profileFilled from "./assets/nav-svg/profile.svg";
import profileOutline from "./assets/nav-svg/profileUN.svg";


import { Route, Router } from "react-router-dom";



const tabs = [
  { id: "home", label: "Home", filled: homeFilled, outline: homeOutline },
  { id: "game", label: "Game", filled: playFilled, outline: playOutline },
  { id: "profile", label: "Profile", filled: profileFilled, outline: profileOutline },
];


function Empty() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      {/* Main Content */}
      <div className="w-full max-w-md flex-1 bg-white overflow-auto">
        {activeTab === "home" && (
          <Home setActiveTab={setActiveTab}/>
        )}
        {activeTab === "game" && (
          <Game/>
        )}
        {activeTab === "profile" && (
          <div className="p-6 text-center">
            {/* Profile Content */}
            <h1 className="text-3xl font-bold">Profile Section</h1>
            <p className="text-gray-600 mt-4">View and edit your profile details.</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="w-full  fixed z-30 bottom-0  max-w-md mx-auto bg-white shadow-md flex justify-around py-3 border-t">
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
     
    </div>
  );
}

export default Empty;
