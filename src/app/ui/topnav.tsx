"use client";

import { url } from "inspector";

const TopNav = () => {
  return (
    <div className="w-svh h-[3.5%] bg-transparent flex justify-center absolute top-10 left-3 right-3 sm:left-16 sm:right-16 border-[3px] border-[#564540] bg-gradient-to-t from-[#453B3B] to-[#675045] rounded-full">
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
