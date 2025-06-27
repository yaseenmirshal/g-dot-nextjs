'use client'

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <img className="w-70" src="/logos/G-DOT white hd.png"  alt="" />
          <p className="text-sm text-gray-300">
            We craft premium, eco-conscious non-woven bags tailored for modern brands. Sustainability meets standout design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-400">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#quote" className="hover:text-white">Get a Quote</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-400">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@ecobagprints.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Kochi, Kerala, India
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-green-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-green-400"><Instagram size={20} /></a>
            <a href="#" className="hover:text-green-400"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} EcoBag Prints. All rights reserved.
      </div>
    </footer>
  )
}
