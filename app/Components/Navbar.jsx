"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Using Lucide icons for the toggle button

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl bg-white backdrop-blur-md z-50 shadow-lg rounded-xl border border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-4 ">
        {/* Left: Logo */}
       <img
          src="/logos/FACEBOOK VOER G-DOT.png"
          alt="Logo"
          className="h-20 md:w-auto m-1 "
        />

        {/* Mobile Menu Toggle + Get in Touch for Mobile */}
        <div className="flex items-center md:hidden space-x-4">
          <Link
            href="#contact"
            className="px-3 py-1.5 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-all duration-300"
          >
            Get in Touch
          </Link>
          <button
            className="text-black hover:text-gray-700 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm text-black hover:text-gray-700 transition-colors duration-300 font-medium group"
            >
              {label}
              <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Right: Get in Touch Button (Desktop Only) */}
        <div className="hidden md:block">
          <a
            href="https://api.whatsapp.com/send/?phone=971544662800&text&type=phone_number&app_absent=0" target="_blank"
            className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-all duration-300"
          >
            Let's talk
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute left-0 top-[100%] w-full flex flex-col items-center py-4 space-y-4 shadow-lg rounded-b-xl">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm text-black hover:text-gray-700 transition-colors duration-300 font-medium group"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {label}
              <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

// Menu items
const menuItems = [
  { href: "#about", label: "About Us" },
  { href: "#nfc-cards", label: "Services" },
  { href: "#materials", label: "Materials" },
];