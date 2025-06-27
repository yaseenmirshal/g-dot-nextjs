'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HeroBanner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1693031630157-7ecc8d06de63?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // 🔁 Replace this with your image URL
      }}
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl" data-aos="fade-right">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
            Travel Brings Power & Love <br /> back to your Life
          </h1>
          <p className="text-white text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Nunc sagittis, urna nec semper pharetra.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#85c744] hover:bg-[#78b93e] text-white px-6 py-3 rounded-full transition duration-300">
              ABOUT US
            </button>
            <button className="border border-[#85c744] text-[#85c744] px-6 py-3 rounded-full hover:bg-[#85c744] hover:text-white transition duration-300">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
