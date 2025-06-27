'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  Code,
  Brush,
  Smartphone,
  Rocket,
} from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Crafting fast, responsive, and dynamic websites tailored to your business goals.',
    icon: <Code size={32} className="text-green-600" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive, user-friendly interfaces that offer the best user experiences.',
    icon: <Brush size={32} className="text-green-600" />,
  },
  {
    title: 'Mobile Optimization',
    description: 'Ensuring your site looks and performs perfectly across all mobile devices.',
    icon: <Smartphone size={32} className="text-green-600" />,
  },
  {
    title: 'Startup Launch',
    description: 'From brand to build — we help startups launch with impact and speed.',
    icon: <Rocket size={32} className="text-green-600" />,
  },
]

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          We offer a range of digital solutions to help your brand grow with creativity, technology, and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
