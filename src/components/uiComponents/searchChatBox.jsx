import React, { useState, useRef, useEffect } from "react";
import { Upload, Mic, ArrowUp, X } from "lucide-react";
import UploadDocumentNotification from "./UploadDocumentNotification";

const SearchChatBox = ({
    placeholder = "Search...",
    value = "",
    onChange = () => { },
    onSend = () => { },
    className = "",
}) => {
    const [showTray, setShowTray] = useState(false);
    const componentRef = useRef(null);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSend();
        }
    };

    // Close tray if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                setShowTray(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [componentRef]);

    return (
        <div ref={componentRef} className={`relative w-full ${className}`}>
            {/* Notification Tray */}
            <div
                className={`absolute bottom-full mb-3 w-full transition-all duration-300 ease-in-out ${showTray
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
            >
                <UploadDocumentNotification />
            </div>

            {/* Search Input Box */}
            <div className="flex items-center border rounded-full px-2 py-1 bg-white shadow-sm">
                {/* Upload/Close Button */}
                <button
                    type="button"
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
                    onClick={() => setShowTray((prev) => !prev)}
                >
                    <div
                        className={`transition-transform duration-300 ${showTray ? "rotate-45" : "rotate-0"
                            }`}
                    >
                        {showTray ? <X className="h-5 w-5" /> : <Upload className="h-5 w-5" />}
                    </div>
                </button>

                {/* Text Input */}
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    aria-label="Search input"
                    className="flex-1 outline-none bg-transparent text-sm text-gray-700 mx-2"
                />

                {/* Action Buttons */}
                <div className="flex items-center gap-1 text-gray-500">
                    <button type="button" className="p-2 rounded-full hover:bg-gray-100">
                        <Mic className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
                        onClick={onSend}
                        disabled={!value.trim()}
                    >
                        <ArrowUp className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchChatBox;

