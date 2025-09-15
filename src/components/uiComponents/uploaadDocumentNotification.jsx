import React from "react";
import {
  Home,
  Music,
  Trophy,
  Gamepad,
  Settings,
  LogOut,
} from "lucide-react";

const UploadDocumentNotification = () => {
  const menuItems = [
    { label: "Home", icon: Home },
    { label: "Music", icon: Music },
    { label: "Sports", icon: Trophy },
    { label: "Gaming", icon: Gamepad },
  ];

  return (
    <div className=" fixed right-[12%] top-[60%]  rounded-md w-50  bg-gray-600 border-gray-700  flex flex-col justify-between text-white">
      
      {/* Top Navigation */}
      <div className="mt-6 px-4">
        {menuItems.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-4 px-3 py-2 mb-2 rounded-lg hover:bg-gray-700/50 cursor-pointer transition"
          >
            <Icon className="h-5 w-5 text-white" />
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadDocumentNotification;
