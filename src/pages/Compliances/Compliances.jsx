import React, { useState } from "react";
import { complianceData } from "../../data/compliances";
import {
  FileText,
  Filter,
  ChevronDown,
  Calendar,
  Shield,
  Users,
  AlertTriangle,
} from "lucide-react";

const statusStyles = {
  Compliant: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  "At Risk": "bg-red-100 text-red-800",
};

const categoryIcons = {
  "Safety & Security": <Shield className="w-4 h-4 text-blue-500" />,
  Environmental: <AlertTriangle className="w-4 h-4 text-green-500" />,
  "Social & Accessibility": <Users className="w-4 h-4 text-purple-500" />,
  "IT & Cybersecurity": <Shield className="w-4 h-4 text-gray-500" />,
  "Human Resources": <Users className="w-4 h-4 text-orange-500" />,
};

const Compliances = () => {
  const [compliances, setCompliances] = useState(complianceData);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompliances = compliances
    .filter((c) => filter === "All" || c.category === filter)
    .filter((c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Compliance Dashboard
      </h1>

      {/* Filter and Search Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All</option>
            {[...new Set(complianceData.map((c) => c.category))].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md w-full md:w-auto text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Compliance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompliances.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {categoryIcons[item.category]}
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-bold rounded-full ${statusStyles[item.status]
                    }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
            <div className="bg-gray-50 px-5 py-3 border-t">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Due: {item.dueDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  <span>{item.id}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compliances;