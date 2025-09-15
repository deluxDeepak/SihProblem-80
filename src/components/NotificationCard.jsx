import React from "react";
import {
  Home,
  Music,
  Trophy,
  Gamepad,
  Settings,
  LogOut,
} from "lucide-react";

const NotificationTray = () => {
  const menuItems = [
    { label: "Home", icon: Home },
    { label: "Music", icon: Music },
    { label: "Sports", icon: Trophy },
    { label: "Gaming", icon: Gamepad },
  ];

  return (
    <div className=" fixed top-12 right-[6%] h-[50%] w-50  bg-linear-to-r from-cyan-500 to-blue-500 border-gray-700  flex flex-col justify-between">
      
      {/* Top Navigation */}
      <div className="mt-6 px-4">
        {menuItems.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-4 px-3 py-2 mb-2 rounded-lg hover:bg-gray-700/50 cursor-pointer transition"
          >
            <Icon className="h-5 w-5 text-black" />
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mb-6 px-4">
        <div className="flex items-center gap-4 px-3 py-2 mb-2 rounded-lg hover:bg-gray-700/50 cursor-pointer transition">
          <Settings className="h-5 w-5 text-black" />
          <span className="font-medium">Settings</span>
        </div>
        <div className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-700/50 cursor-pointer transition">
          <LogOut className="h-5 w-5 text-black" />
          <span className="font-medium">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationTray;
