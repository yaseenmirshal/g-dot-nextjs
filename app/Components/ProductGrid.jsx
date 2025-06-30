'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ShoppingBag } from 'lucide-react'

const products = [
  { name: 'Gift Wrapping Paper', image: 'https://i.imgur.com/K3oD5Gt.png' },
  { name: 'Gift Paper Bags', image: 'https://i.imgur.com/Y2VJ5r4.png' },
  { name: 'Greeting Cards', image: 'https://i.imgur.com/qFZVeRO.png' },
  { name: 'Shopping Paper Bags', image: 'https://i.imgur.com/zsqFHQB.png' },
  { name: 'Brown Paper Bags', image: 'https://i.imgur.com/3aYJ46A.png' },
  { name: 'Kraft Paper Bags', image: 'https://i.imgur.com/U1K1HkL.png' },
  { name: 'Bakery Paper Bags', image: 'https://i.imgur.com/jtqNInm.png' },
  { name: 'Laminated Paper Bags', image: 'https://i.imgur.com/YFYbpUv.png' },
  { name: 'Flat Handle Paper Bags', image: 'https://i.imgur.com/Cm7kNU8.png' },
  { name: 'White Paper Bags', image: 'https://i.imgur.com/HepVoRb.png' },
  { name: 'Printed Paper Bags', image: 'https://i.imgur.com/bAnqDFV.png' },
  { name: 'Designer Paper Bags', image: 'https://i.imgur.com/8PHE9w4.png' },
]

export default function ProductGrid() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800">
          Our <span className="text-green-600">Products</span>
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
