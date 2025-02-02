"use client";
import React, { useState } from "react";

export default function Home() {
  return (
    <>
      <div className="w-full h-auto bg-black">d</div>
      <div className="w-full h-10 bg-gradient-to-b from-black to-transparent absolute"></div>
      <div
        className="w-full min-h-screen bg-cover bg-top"
        style={{ backgroundImage: "url('/images/Background.png')" }}
      >
        <div className="h-[275vh] flex justify-center items-center text-white text-3xl">
          Scroll down to see more...
        </div>
      </div>
    </>
  );
}
