import React, { useState } from "react";
import {
  Upload,
  Mail,
  MessageSquare,
  Folder,
  Settings,
  Scan,
  FileText,
  Image,
  File,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../uiComponents/card";

const UploadWidget = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedSource, setSelectedSource] = useState("folder");

  const sources = [
    {
      id: "gmail",
      label: "Gmail",
      icon: Mail,
      color: "bg-red-100 text-red-600",
      url: "https://mail.google.com"
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: MessageSquare,
      color: "bg-green-100 text-green-600",
      url: "https://web.whatsapp.com"
    },
    {
      id: "sharepoint",
      label: "SharePoint",
      icon: Folder,
      color: "bg-blue-100 text-blue-600",
      url: "https://yourcompany.sharepoint.com"
    },
    {
      id: "maximo",
      label: "Maximo",
      icon: Settings,
      color: "bg-yellow-100 text-yellow-600",
      url: "https://your-maximo-instance.com"
    },
    {
      id: "scan",
      label: "Scan",
      icon: Scan,
      color: "bg-purple-100 text-purple-600",
      url: "#" // agar scan ka koi link nahi hai to "#"
    },
    {
      id: "kochimetrorail",
      label: "KMRL Portal",
      icon: FileText,
      color: "bg-teal-100 text-teal-600",
      url: "https://kochimetro.org"
    },
  ];


  // ---------------- Get File Icon ----------------
  const getFileIcon = (type) => {
    if (type.includes("image")) return Image;
    if (type.includes("pdf") || type.includes("document")) return FileText;
    return File;
  };

  // ---------------- Drag Handlers ----------------
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);

    const newFiles = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.type,
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      source: selectedSource,
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  // ---------------- File Input Handler ----------------
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);

    const newFiles = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.type,
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      source: selectedSource,
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  return (
    <Card className="w-full max-w-5xl  mx-auto p-4 bg-white shadow-md rounded-lg mt-2">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Upload className="w-5 h-5 text-blue-600" /> Upload Documents
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Source Selection */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {sources.map((src) => (
            <button
              key={src.id}
              type="button"
              className={`flex cursor-pointer items-center gap-1 px-3 py-1 rounded-full border transition-colors duration-200 text-sm font-medium focus:outline-none ${selectedSource === src.id
                ? `${src.color} border-blue-500`
                : "bg-gray-100 text-gray-700 border-gray-200"
                }`}
              onClick={() => {
                setSelectedSource(src.id)
                if (src.url) window.open(src.url, "_blank"); // 🔗 open in new tab
              }}
            >
              <src.icon className="w-4 h-4" /> {src.label}
            </button>
          ))}
        </div>

        {/* Drag & Drop Area */}
        <div
          className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 mb-4 transition-colors duration-200  ${isDragOver ? "border-blue-400 bg-blue-50" : "border-gray-300 bg-gray-50"
            }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="w-10 h-10 text-blue-400 mb-2" />
          <p className="text-gray-700 font-medium">Drag & drop files here</p>
          <p className="text-xs text-gray-500">or click to select files</p>
          <input
            type="file"
            multiple
            className="hidden"
            id="fileInput"
            onChange={handleFileSelect}
          />
          <label
            htmlFor="fileInput"
            className="mt-2 px-4 py-1 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition-colors text-sm"
          >
            Browse Files
          </label>
        </div>

        {/* Uploaded Files List */}
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {uploadedFiles.length === 0 ? (
            <p className="text-gray-400 text-center">No files uploaded yet.</p>
          ) : (
            uploadedFiles.map((file) => {
              const Icon = getFileIcon(file.type);
              return (
                <div
                  key={file.id}
                  className="flex items-center justify-between bg-gray-100 rounded px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium text-gray-800 text-sm">
                        {file.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {file.size} • {file.source}
                      </div>
                    </div>
                  </div>
                  <button
                    className="ml-2 text-black rounded-md p-3 bg-red-400 hover:bg-red-500 "
                    onClick={() =>
                      setUploadedFiles((prev) =>
                        prev.filter((f) => f.id !== file.id)
                      )
                    }
                    title="Remove"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadWidget;
