"use client";

import { url } from "inspector";

const NavOld = () => {
  return (
    <>
      <div className="w-full h-52 bg-gradient-to-b from-black to-transparent absolute"></div>
      <div className="w-svh h-[4%] bg-transparent flex justify-center absolute top-20 left-3 right-3 sm:left-16 sm:right-16 border-[3px] border-[#1c0e2c] bg-gradient-to-t from-[#1c0e2c] to-[#7539d4] rounded-full text-lg">
        <div className="w-[80%] flex flex-row justify-between items-center">
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact Me</div>
        </div>
      </div>
    </>
  );
};

export { NavOld };
