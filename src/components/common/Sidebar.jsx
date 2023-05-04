import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-48 bg-[#000000] opacity-80 text-gray-100">
      <div className="py-4 px-6">
        <h2 className="text-xs pb-2 text-center font-medium">Committee</h2>
        <h2 className="text-xl text-center font-bold text-[#2AD16D]">UNHRC</h2>
        <h2 className="text-xs pb-2 text-center pt-2 font-medium">Session ID</h2>
        <h2 className="text-xl text-center text-[#74C5FF] font-bold"># 040523-2</h2>
      </div>
      <nav className="flex-1 pt-10 space-y-1">
        <button  className="block py-3 w-full border border-blue-500 rounded-lg font-bold text-lg  bg-white text-gray-700 px-6 hover:bg-gray-700">
          Roll Call
        </button>
        <button  className="block py-3 w-full border border-blue-500 rounded-lg font-bold text-lg bg-white text-gray-700 px-6 hover:bg-gray-700">
         GSL
        </button>
        <button  className="block py-3 w-full border border-blue-500 rounded-lg font-bold text-lg bg-white text-gray-700 px-6 hover:bg-gray-700">
          Mod-Cocus
        </button>
        <button  className="block py-3 w-full border border-blue-500 rounded-lg font-bold text-lg bg-white text-gray-700 px-6 hover:bg-gray-700">
        UnMod-Cocus
        </button>
        <button  className="block py-3 w-full border border-blue-500 rounded-lg font-bold text-lg bg-white text-gray-700 px-6 hover:bg-gray-700">
          POI
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
