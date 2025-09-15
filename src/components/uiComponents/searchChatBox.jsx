import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Upload, Mic, ArrowUp, Plus } from "lucide-react";
import UploadDocumentNotification from "./uploaadDocumentNotification";

const SearchChatBox = ({ placeholder = "Search...", value = "", onChange = () => { }, className = "", onUploadClick = () => { }, onSend = () => { }, }) => {


    // const handleClick = () => {
    //     // value="" ❌ Ye directly kaam nahi karega, kyunki value prop se aa raha hai
    //     console.log(value)
    // }
    // handle Enter key
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // avoid form submit refresh
            onSend();
        }
    };

    const [showTray, setShowTray] = useState(false);




    return (
        <div className={`flex  items-center border rounded-full px-3 py-2 bg-white shadow-sm w-full ${className}`}>

            <SearchIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}   //Enter pe sed karega
                aria-label="Search input"
                className="flex-1 outline-none bg-transparent text-sm text-gray-700"
            />

            {/* Actions */}
            <div className="flex items-center gap-2 ml-2 text-gray-600">
                <button type="button"
                    className="p-2 rounded-full hover:text-black hover:bg-gray-500 cursor-pointer"
                    onClick={onUploadClick}   // 👈 ab ye parent ki state reset karega

                >
                    <Upload className="h-5 w-5" />
                </button>
                <button type="button" className="p-2 rounded-full hover:text-black hover:bg-gray-500 cursor-pointer">
                    <Mic className="h-5 w-5" />
                </button>


                {/* Plus Button instead of ArrowUp */}
                <button
                    type="button"
                    className="p-2 rounded-full hover:text-black hover:bg-gray-500 cursor-pointer"
                    onClick={() => setShowTray((prev) => !prev)}

                >
                    <Plus className="h-5 w-5" />
                    {showTray && <UploadDocumentNotification />}
                </button>
                
            </div>





        </div>
    );
};

export default SearchChatBox;

