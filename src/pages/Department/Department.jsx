import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  FileText,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import { DepartmentSidebar } from "../../components/DepartmentSidebar/DepartmentSidebar";
import { BadgeVariant } from "../../components/uiComponents/badgesVariants";
import ChatSection from "../NotFound/ChatSection";
import { departments } from "../../data/departmentData"; // Import department data

const Department = () => {
  const [selectedDepartmentId, setSelectedDepartmentId] = useState("operations");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => setIsCollapsed((prev) => !prev);



  // Add effect to automatically collapse sidebar at specific width
  useEffect(() => {
    const handleResize = () => {
      // Auto collapse when width is below 768px (md breakpoint)
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    // Initial check on mount
    handleResize();

    // Set up event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);








  const selectedDepartment = departments.find(
    (dept) => dept.id === selectedDepartmentId
  );

  return (
    <div className="h-[100vh] flex left-0 bg-gray-50 overflow-hidden">
      <DepartmentSidebar
        selectedDepartment={selectedDepartmentId}
        onDepartmentSelect={setSelectedDepartmentId}
        isCollapsed={isCollapsed}
        onToggleCollapse={handleToggleCollapse}
      />

      {/* Department Details Section */}
      {selectedDepartmentId !== "AiChat" && selectedDepartment && (
        <div className="flex-1 flex flex-col h-full">
          {/* Header - Fixed at top */}
          <div className="p-3 sm:p-4 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-4xl">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                {selectedDepartment.name}
              </h1>
              <p className="text-sm sm:text-md text-gray-600">
                Headed by:{" "}
                <span className="font-semibold">{selectedDepartment.head}</span>
              </p>
            </div>
          </div>

          {/* Main content - Takes remaining height without scrolling */}
          <div className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-[calc(100vh-80px)]">
            {/* Left/Main content area - Takes more space */}
            <div className="lg:col-span-2 xl:col-span-3 space-y-4">
              {/* Description */}
              <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm">
                <p className="text-gray-700 text-sm sm:text-base">{selectedDepartment.description}</p>
              </div>

              {/* Key Metrics */}
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">
                  Key Metrics
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {selectedDepartment.keyMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-white p-3 sm:p-4 rounded-lg shadow-sm flex items-center justify-between"
                    >
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">{metric.label}</p>
                        <p className="text-xl sm:text-2xl font-bold text-gray-800">
                          {metric.value}
                        </p>
                      </div>
                      {metric.trend === "up" ? (
                        <TrendingUp className="w-6 h-6 text-green-500" />
                      ) : (
                        <TrendingDown className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activities */}
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">
                  Recent Activities
                </h2>
                <div className="bg-white p-3 sm:p-5 rounded-lg shadow-sm">
                  <ul className="space-y-2 sm:space-y-3">
                    {selectedDepartment.recentActivities.map((activity, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-xs sm:text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right sidebar - Activity summary */}
            <div className="lg:block bg-white p-3 sm:p-4 rounded-lg shadow-sm h-fit">
              <h2 className="text-lg font-medium text-gray-700 mb-3">
                Department Summary
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Documents:</span>
                  <span className="font-semibold">{selectedDepartment.documentCount || 0}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Staff:</span>
                  <span className="font-semibold">{selectedDepartment.staffCount || 0}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Projects:</span>
                  <span className="font-semibold">{selectedDepartment.projectCount || 0}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* AI Chat Section */}
      {selectedDepartmentId === "AiChat" && (
        <div className="flex-1 h-screen overflow-hidden">
          <ChatSection />
        </div>
      )}
    </div>
  );
};

export default Department;