import React from "react";
import {
  Home,
  Building2,
  User,
  FileText,
  Settings,
  LogOut,
  HelpCircle,
  Bell,
  UserCog,
  Users,
} from "lucide-react";

const Sidebar = () => {
  const navigationItems = [
    { label: "Home", icon: Home, group: "main" },
    { label: "Departments", icon: Building2, group: "main" },
    { label: "Documents", icon: FileText, group: "main" },
    { label: "Team", icon: Users, group: "main" },
    { label: "Notifications", icon: Bell, group: "profile" },
    { label: "My Profile", icon: User, group: "profile" },
    { label: "Account Settings", icon: UserCog, group: "profile" },
    { label: "Help & Support", icon: HelpCircle, group: "others" },
    { label: "Settings", icon: Settings, group: "others" },
    { label: "Logout", icon: LogOut, group: "others" },
  ];

  // Helper function to render navigation items
  const renderNavItems = (group) => {
    return navigationItems
      .filter(item => item.group === group)
      .map(({ label, icon: Icon }) => (
        <div
          key={label}
          className="flex items-center gap-4 px-3 py-2 mb-2 rounded-lg hover:bg-blue-700 cursor-pointer transition-all"
        >
          <Icon className="h-5 w-5 text-blue-200" />
          <span className="font-medium">{label}</span>
        </div>
      ));
  };

  return (
    <div className="fixed top-0 right-0 h-screen w-[40%] sm:w-[50%] xl:w-[20%] bg-gradient-to-b from-blue-600 to-gray-500 shadow-lg flex flex-col justify-between text-white">

      {/* Profile Section */}
      <div className="mt-6 mb-8 px-4">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-blue-800 font-bold">
            KM
          </div>
          <div>
            <h3 className="font-semibold">Kochi Metro</h3>
            <p className="text-xs text-blue-200">Admin Portal</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 px-4 overflow-y-auto">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-blue-200 uppercase tracking-wider px-3 mb-2">
            Main
          </h3>
          {renderNavItems("main")}
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-blue-200 uppercase tracking-wider px-3 mb-2">
            Profile
          </h3>
          {renderNavItems("profile")}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mb-6 px-4 border-t border-blue-700 pt-4">
        <h3 className="text-xs font-semibold text-blue-200 uppercase tracking-wider px-3 mb-2">
          Other
        </h3>
        {renderNavItems("others")}
      </div>
    </div>
  );
};

export default Sidebar;
