import React from "react";

function PlayerBar() {
  return (
    <div className="bg-Backgroundnavbar text-white flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <img
          src={require("../img/505.jpeg")}
          alt="Album Art"
          className="w-12 h-12 mr-4"
        />
        <div>
          <div className="text-sm font-bold">505</div>
          <div className="text-xs text-gray-400">Arctic Monkeys</div>
        </div>
      </div>
      <div className="flex gap-4">
        <button>⏮️</button>
        <button>▶️</button>
        <button>⏭️</button>
      </div>
      <div className="flex items-center gap-2">
        <span>00:00</span>
        <div className="bg-gray-600 w-64 h-2 rounded-full">
          <div className="bg-purple-500 w-16 h-2 rounded-full"></div>
        </div>
        <span>00:00</span>
      </div>
    </div>
  );
}

export default PlayerBar;
