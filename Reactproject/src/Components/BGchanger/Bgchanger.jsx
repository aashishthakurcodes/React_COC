import React, { useState } from "react";

function Bgchanger() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-[85vh] flex flex-col lg:flex-row justify-around items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6">
      {/* Color Preview Box */}
      <div
        className="h-[50vh] w-[90%] lg:w-[600px] rounded-lg shadow-lg flex justify-center items-center text-2xl font-semibold"
        style={{ background: color }}
      >
        <p className="text-gray-900 dark:text-gray-50">Hello World !!!!</p>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col items-center lg:items-start space-y-4">
        <h1 className="text-3xl font-bold text-center lg:text-left">
          Background Color Changer
        </h1>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button
            onClick={() => setColor("red")}
            className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-all"
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-all"
          >
            Green
          </button>
          <button
            onClick={() => setColor("skyblue")}
            className="px-6 py-2 bg-sky-500 text-white rounded-lg shadow hover:bg-sky-600 transition-all"
          >
            Sky Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="px-6 py-2 bg-yellow-500 text-black rounded-lg shadow hover:bg-yellow-600 transition-all"
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bgchanger;
