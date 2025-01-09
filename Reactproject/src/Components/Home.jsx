import React from "react";

function Home() {
  return (
    <div className="w-full h-[85vh] bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-orange-500 flex flex-col lg:flex-row items-center lg:justify-between p-6">
      {/* Left Section */}
      <div className="w-full lg:w-[60%] flex flex-col justify-center items-center space-y-6">
        <h1 className="text-5xl lg:text-8xl font-serif text-center leading-tight">
          Chai With Code 
        </h1>
        <h2 className="text-xl lg:text-3xl font-medium text-center">
          Build and Explore React Projects
        </h2>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[40%] flex justify-center items-center mt-6 lg:mt-0">
        <img
          src="https://camo.githubusercontent.com/4d9f5ecceb711eec6e2018f38a5677dc657c9738d4a65ba3b928c41c0a45b439/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966"
          alt="Coding Animation"
          className="w-3/4 lg:w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;
