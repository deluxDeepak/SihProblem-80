import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { Upload, Mic, ArrowUp } from "lucide-react";

const Search = ({ placeholder = "Search...", value = "", onChange, className = "" }) => {
  return (
    <div className={`flex items-center border rounded-md px-3 py-2 bg-white shadow-sm w-full ${className}`}>

      <SearchIcon className="h-5 w-5 text-gray-500 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label="Search input"
        className="flex-1 outline-none bg-transparent text-sm text-gray-700"
      />

      {/* Actions */}
      <div className="flex items-center gap-2 ml-2 text-gray-600">
        <button type="button" className="p-1 hover:text-black">
          <Upload className="h-5 w-5" />
        </button>
        <button type="button" className="p-1 hover:text-black">
          <Mic className="h-5 w-5" />
        </button>
        <button type="submit" className="p-1 hover:text-black">
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>





    </div>
  );
};

export default Search;

