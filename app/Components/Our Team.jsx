'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Instagram } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const team = [
  {
    name: 'ABBAS',
    role: 'Founder, Chairman & Mentor',
    image: '/abbas hd.png',
  },
  {
    name: 'IRSHAD MAAZANK',
    role: 'CEO, Co-Founder & Head of Marketing',
    image: '/irshad.png',
  },
  {
    name: 'MUHAMMED SIYAD',
    role: 'COO, Co-Founder & Head of Procurement',
    image: '/siyad k.png',
  },
  {
    name: 'MUHAMMED BADSHA',
    role: 'CCO, Co-Founder & Head of Sales',
    image: 'https://cdn.pixabay.com/photo/2022/06/05/07/04/person-7243410_1280.png',
  },
]

export default function TeamSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section id='ourteam' className="py-20 bg-white">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800">
          Meet <span className="text-green-600">Our Team</span>
        </h2>
        <div className="h-1 w-12 bg-green-500 mx-auto mt-2 rounded"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="group border border-gray-200 rounded-md shadow-sm overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="relative w-full h-[270px] overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex items-center justify-center gap-4">
                <a
                  href="https://wa.me"
                  target="_blank"
                  className="text-white bg-white/10 p-3 rounded-full hover:bg-white/20 opacity-0 group-hover:opacity-100 transition"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-white bg-white/10 p-3 rounded-full hover:bg-white/20 opacity-0 group-hover:opacity-100 transition"
                >
                  <Instagram />
                </a>
              </div>
            </div>
            {/* Name & Role */}
            <div className="bg-white text-center py-4">
              <h4 className="text-lg font-semibold text-black">{member.name}</h4>
              <p className="text-sm font-bold text-green-600 mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
