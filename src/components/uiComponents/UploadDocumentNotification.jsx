import React from "react";
import {
    Upload,
    MessageSquare,
    Folder,
    Settings,
    Scan,
    Paperclip,
} from "lucide-react";

const UploadOption = ({ icon: Icon, title, description, bgColor, textColor }) => (
    <div
        className={`flex items-center p-3 md:p-4 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${bgColor}`}
    >
        <Icon className={`w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4 flex-shrink-0 ${textColor}`} />
        <div className="flex-1 min-w-0">
            <h3 className={`font-semibold text-sm md:text-md truncate ${textColor}`}>{title}</h3>
            <p className="text-xs md:text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
    </div>
);

const UploadDocumentNotification = () => {
    const sources = [
        {
            icon: Upload,
            title: "Upload from Device",
            description: "Select files from your computer",
            bgColor: "bg-blue-50",
            textColor: "text-blue-700",
        },
        {
            icon: MessageSquare,
            title: "Import from WhatsApp",
            description: "Connect to pull documents",
            bgColor: "bg-green-50",
            textColor: "text-green-700",
        },
        {
            icon: Folder,
            title: "Get from SharePoint",
            description: "Access your organization's files",
            bgColor: "bg-indigo-50",
            textColor: "text-indigo-700",
        },
        {
            icon: Settings,
            title: "Fetch from Maximo",
            description: "Retrieve assets and reports",
            bgColor: "bg-yellow-50",
            textColor: "text-yellow-700",
        },
        {
            icon: Scan,
            title: "Scan a Hardcopy",
            description: "Use a connected scanner",
            bgColor: "bg-purple-50",
            textColor: "text-purple-700",
        },
    ];

    return (
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-md w-full max-w-full sm:w-[90%] md:w-[75%] md:max-w-2xl  overflow-hidden">
            <div className="flex items-center mb-3 md:mb-6">
                <Paperclip className="w-5 h-5 md:w-6 md:h-6 text-gray-700 mr-2 md:mr-3 flex-shrink-0" />
                <h2 className="text-lg md:text-xl font-bold text-gray-800 truncate">
                    Upload a Document
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 max-h-[60vh] overflow-y-auto pb-1">
                {sources.map((source) => (
                    <UploadOption key={source.title} {...source} />
                ))}
            </div>
        </div>
    );
};

export default UploadDocumentNotification;