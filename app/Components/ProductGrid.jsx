'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ShoppingBag } from 'lucide-react'

const products = [
  { name: 'Non-Woven Bags', image: '/nonwoven.png' },
  { name: 'Paper Strow', image: 'https://daromas.in/cdn/shop/files/51roJ2R6CoL._SX679_2c65aacb-5f28-4756-8180-053cec5a81c9.jpg?v=1723121882&width=1946' },
  { name: 'Tissue Paper', image: 'https://lh3.googleusercontent.com/proxy/BdYZy8TOr5Do4wWtUinjqC6juWLsgMM_GNKreyJ0l35E6_9asznSAopxZZwWzEoRgNdGXuGg5M1SknE2a6p-gSpays0IreR8hC1fJVwpXaB4UyeYPhjWStGHh7pjulWzorc' },
  { name: 'Paper Glass', image: 'https://daromas.in/cdn/shop/files/WHITE_DISPOSABLE.jpg?v=1732604935' },
  { name: 'Food Container', image: 'https://biopackagingsolution.com/wp-content/uploads/2016/03/71p6plbu0L._SL1500_.jpg' },
  { name: 'Paper Plate', image: 'https://m.media-amazon.com/images/I/71yJ7yw9lHS._UF1000,1000_QL80_.jpg' },
  
 
]

export default function ProductGrid() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section id='services' className="py-20 bg-white">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800">
          Our <span className="text-green-600">Services</span>
        </h2>
        <div className="flex items-center justify-center mt-2">
          <ShoppingBag className="text-green-600 mr-2" />
          <div className="h-1 w-12 bg-green-500 rounded"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white shadow hover:shadow-md transition rounded-lg p-4 flex flex-col items-center border"
            data-aos="fade-up"
            data-aos-delay={idx * 50}
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-32 object-contain mb-4"
            />
            <h4 className="text-green-700 text-center text-sm font-semibold">
              {product.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}
