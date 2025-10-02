"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = ["Profile", "About", "Experience", "Research"];

  return (
    <nav className="bg-gray-50 shadow-sm fixed w-full z-50 font-sans">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#profile"
          className="text-indigo-600 font-bold text-xl hover:text-indigo-500 transition"
        >
          Tiara Mirchandani
        </a>

        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* SVG icon */}
        </button>

        {/* Menu */}
        <ul className={`md:flex md:items-center md:space-x-6 ...`}>
          {sections.map((section) => (
            <li key={section} className="text-center md:text-left">
              <a
                href={`#${section.toLowerCase()}`}
                className="block px-6 py-2 text-gray-800 hover:text-indigo-500 font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
