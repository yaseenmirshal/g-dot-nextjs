'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Image Section */}
        <div data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
            alt="About us"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            At <span className="text-green-700 font-semibold">Your Company</span>, we blend creativity, strategy, and innovation to deliver
            impactful digital solutions. We believe in clean aesthetics and meaningful functionality that connects with real people.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            From design to deployment, our mission is to create exceptional digital experiences that reflect the values and vision of every client we work with.
          </p>
        </div>
      </div>
    </section>
  )
}
