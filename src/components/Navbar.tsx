"use client";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-gray-600 text-white shadow-md rounded-2xl m-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left: Photo + Name */}
        <div className="flex items-center gap-3">

          <h1 className="text-2xl font-bold">Ayesha Irfan</h1>
        </div>

        {/* Right: Navigation Links */}
        <nav className="flex gap-4 text-lg font-medium">
          <Link
            href="/"
            className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
