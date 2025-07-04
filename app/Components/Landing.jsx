'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ShoppingBag } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa' // <-- Add this

export default function HeroLandingClean() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <>
      <section className="w-full h-screen bg-white flex items-center pt-44 md:pt-0">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12 mt-44 md:mt-0">
          {/* Left Content */}
          <div data-aos="fade-top">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-snug mb-6">
              Eco-Friendly Non-Woven Bags for Your Brand
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Reusable, customizable, and sustainable – perfect for promotions, packaging, and daily use.
            </p>
            <div className="flex gap-4">
              <a
  href="https://wa.me/919946260777" // replace with your actual number
  target="_blank"
  rel="noopener noreferrer"
>
              <button className="bg-green-600 text-white px-3 md:px-6 py-3 rounded-full hover:bg-green-700 transition">
                Order Now
              </button>
              </a>
             <a
  href="#materials"
  className="border border-green-600 text-green-700 px-6 py-3 rounded-full hover:bg-green-100 transition inline-block"
>
  View Products
</a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center" data-aos="fade-right">
            <div className="relative w-full max-w-md">
              <img
                src="https://5.imimg.com/data5/BY/UG/MY-4035107/non-woven-carry-bag.jpg"
                alt="Non-Woven Bag"
                className="rounded-xl shadow-lg object-cover w-full"
              />
              <div className="absolute top-[-20px] left-[-20px] bg-green-100 p-3 rounded-full shadow">
                <ShoppingBag className="text-green-700" size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/919946260777" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  )
}
