"use client";
import React, { useState, useEffect } from "react";
import { TopNav } from "./ui/topnav";

export default function Home() {
  return (
    <div className="w-svh h-svh bg-[#bdbde7]">
      <div className="w-full">Top Nav</div>

      <TopNav page="Home" />
    </div>
  );
}
