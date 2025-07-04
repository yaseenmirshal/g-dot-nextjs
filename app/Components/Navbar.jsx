"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Lucide icons for toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl bg-white backdrop-blur-md z-50 shadow-lg rounded-xl border border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <img
          src="/logos/FACEBOOK VOER G-DOT.png"
          alt="Logo"
          className="h-16 md:w-auto"
        />

        {/* Mobile: Toggle + Get in Touch */}
        <div className="flex items-center md:hidden space-x-4">
          <Link
            href="#contact"
            className="px-3 py-1.5 bg-teal-600 text-white text-sm font-medium rounded-lg hidden hover:bg-teal-700 transition"
          >
            Get in Touch
          </Link>
          <button
            className="text-black hover:text-gray-700 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop: Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm text-black hover:text-gray-700 transition font-medium group"
            >
              {label}
              <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Desktop: Let's Talk Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/919946260777"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition"
          >
            Let's talk
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur-md w-full rounded-b-xl shadow-md`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-black hover:text-gray-700 font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Navigation links
const menuItems = [
  { href: "#materials", label: "Materials" },
  { href: "#services", label: "Services" },
  { href: "#contactus", label: "Contact Us" },
  { href: "#ourteam", label: "Our Team" },
  { href: "#aboutus", label: "About Us" },
];
