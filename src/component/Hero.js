import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://devman-react.vercel.app/img/hero/1.jpg')",
      }}
    >
      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-11/12 max-w-screen-lg">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
};

export default Hero;
