import React from "react";
import {
  Home,
  Music,
  Trophy,
  Gamepad,
  Settings,
  LogOut,
} from "lucide-react";
import Mainsection from "./ChatSection";

const Notfound = () => {
  const menuItems = [
    { label: "Home", icon: Home },
    { label: "Music", icon: Music },
    { label: "Sports", icon: Trophy },
    { label: "Gaming", icon: Gamepad },
  ];

  // ✅ Kochi Metro Rail (KMRL) related questions
  const questions = [
    { label: "Security", text: "How does KMRL ensure passenger safety?" },
    { label: "Operations", text: "What are the operating hours of Kochi Metro?" },
    { label: "Ticketing", text: "How to purchase Kochi1 card for metro rides?" },
    { label: "Expansion", text: "What are the upcoming metro extensions in Kochi?" },
    { label: "Sustainability", text: "How does KMRL promote eco-friendly transport?" },
    { label: "Smart Systems", text: "How does Kochi Metro use AI & IoT in operations?" },
    { label: "Facilities", text: "What facilities are available at Kochi Metro stations?" },
    { label: "Integration", text: "How is Kochi Metro integrated with buses and ferries?" },
    { label: "Women Empowerment", text: "Why does KMRL employ women in majority roles?" },
    { label: "Future Plans", text: "What is Kochi Metro’s long-term vision?" },
  ];

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar (20%) */}
      <div className="hidden md:flex md:w-1/5 bg-gray-900 border-r border-gray-700 text-white flex-col justify-between">
        {/* Top Navigation */}
        <div className="mt-6 px-4">
          {menuItems.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-4 px-3 py-2 mb-2 rounded-lg hover:bg-gray-700/50 cursor-pointer transition"
            >
              <Icon className="h-5 w-5 text-gray-300" />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* History / Question Section */}
        <div className="flex-1 overflow-y-auto px-4 mt-6">
          <h2 className="text-sm font-semibold text-gray-400 mb-3">Questions</h2>
          {questions.map(({ label, text }) => (
            <div
              key={label}
              className="flex flex-col px-3 py-2 mb-2 rounded-lg hover:bg-gray-700/50 cursor-pointer transition"
            >
              <span className="font-medium text-white">{label}</span>
              <span className="text-xs text-gray-400">{text}</span>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mb-6 px-4">
          <div className="flex items-center gap-4 px-3 py-2 mb-2 rounded-lg hover:bg-gray-700/50 cursor-pointer transition">
            <Settings className="h-5 w-5 text-gray-300" />
            <span className="font-medium">Settings</span>
          </div>
          <div className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-700/50 cursor-pointer transition">
            <LogOut className="h-5 w-5 text-gray-300" />
            <span className="font-medium">Logout</span>
          </div>
        </div>
      </div>

      {/* Main Section (80%) */}
      <div className="w-full md:w-4/5">
        <Mainsection />
      </div>
    </div>

  );
};

export default Notfound;
