'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ShoppingBag } from 'lucide-react'

const products = [
  { name: 'Non-Woven Bags', image: '/nonwovenbag.png' },
  { name: 'Paper Strow', image: 'https://i.pinimg.com/736x/78/1b/d3/781bd31cb62ec0e1ac8f692de15424ae.jpg' },
  { name: 'Tissue Paper', image: 'https://i.pinimg.com/736x/7f/42/35/7f4235f58233a144d5a8356b2d9babe8.jpg' },
  { name: 'Paper Glass', image: 'https://i.pinimg.com/736x/5d/d9/58/5dd9586a865a6c3a7998e25d8c25be04.jpg' },
  { name: 'Food Container', image: 'https://i.pinimg.com/736x/ed/3d/b4/ed3db4b54a7b0468bcdca67634d909e8.jpg' },
  { name: 'Paper Plate', image: 'https://m.media-amazon.com/images/I/71yJ7yw9lHS._UF1000,1000_QL80_.jpg' },
  
 
]

export default function ProductGrid() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="py-20 bg-white">
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
