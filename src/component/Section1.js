import React from "react";

const Section1 = () => {
  return (
    <div className="text-white font-bold text-center md:text-left space-y-4">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl">Hello, I'm</h1>
      <strong className="text-3xl sm:text-5xl lg:text-6xl">Naushin Khan</strong>
      <p className="text-lg sm:text-xl lg:text-2xl">
        An Enthusiastic Web Developer
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
       
        <button className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-red-400">
          About Me
        </button>
      </div>
    </div>
  );
};

export default Section1;
