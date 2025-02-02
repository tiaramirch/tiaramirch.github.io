"use client";

import { url } from "inspector";

const TopNav = () => {
  return (
    <div className="w-svh h-[4%] bg-transparent flex justify-center absolute top-20 left-3 right-3 sm:left-16 sm:right-16 border-[3px] border-[#3d1919] bg-gradient-to-t from-[#3a2312] to-[#b04b2c] rounded-full">
      <div className="w-[80%] flex flex-row justify-between items-center">
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Contact Me</div>
      </div>
    </div>
  );
};

export { TopNav };
