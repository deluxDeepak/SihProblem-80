import React from "react";
import {
  Bell,
  AlertTriangle,
  Info,
  Check,
  FileText,
  Mail,
  Calendar,
  X,
  MessageSquare,
} from "lucide-react";
import { notifications } from "../data/notifications";

const NotificationCard = () => {

  // Helper function to get the icon based on notification type
  const getNotificationIcon = (type) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      case "success":
        return <Check className="h-5 w-5 text-green-500" />;
      case "message":
        return <MessageSquare className="h-5 w-5 text-purple-500" />;
      case "calendar":
        return <Calendar className="h-5 w-5 text-orange-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="fixed top-12 right-4 sm:right-8 w-[90%] max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
      {/* Header */}
      <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          <h3 className="font-semibold">Notifications</h3>
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {notifications.filter(n => !n.read).length}
          </span>
        </div>
        <button className="text-white hover:bg-blue-700 rounded-full p-1">
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Notifications List */}
      <div className="max-h-[60vh] overflow-y-auto divide-y divide-gray-200">
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No notifications
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 hover:bg-gray-50 cursor-pointer transition-colors ${!notification.read ? "bg-blue-50" : ""
                }`}
            >
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className={`text-sm font-medium ${notification.type === 'alert' ? 'text-red-600' : 'text-gray-900'
                      }`}>
                      {notification.title}
                    </p>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {notification.message}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-2 bg-gray-50 border-t border-gray-200 text-center">
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          Mark all as read
        </button>
        <span className="mx-2 text-gray-300">|</span>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all
        </button>
      </div>
    </div>
  );
};

export default NotificationCard;
