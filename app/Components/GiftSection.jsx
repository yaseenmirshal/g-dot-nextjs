'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

const gifts = [
  {
    title: 'Corporate Gifts',
    description: 'Elegant and professional gift boxes for employees, partners, and clients.',
    image: 'https://i.pinimg.com/736x/98/32/bd/9832bdd766775b3d18d6b32de41005a9.jpg',
    category: 'Corporate',
  },
  {
    title: 'Customized Mug & Diary Set',
    description: 'Personalized gifts with names, logos, or messages for special occasions.',
    image: 'https://i.pinimg.com/736x/7f/74/c8/7f74c8e095449d47f835863f00afee87.jpg',
    category: 'Customized',
  },
  {
    title: 'Festive Hamper',
    description: 'Beautifully curated gift hampers for holidays and corporate festivals.',
    image: 'https://i.pinimg.com/736x/db/2e/0f/db2e0fbf8f43469ae423b95f578a7106.jpg',
    category: 'Corporate',
  },
  {
    title: 'Personalized Mini Perfume Set',
    description: 'Custom fragrance gift sets – perfect for unique, memorable impressions.',
    image: 'https://i.pinimg.com/736x/5b/15/db/5b15db04bd433aa42fa765e13449403d.jpg',
    category: 'Customized',
  },
]

export default function GiftSection() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <section className="py-16 px-56 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Elegant Gift Collection</h2>
        <p className="text-gray-600 text-lg">
          Discover our curated selection of corporate and customized gifts — crafted to impress.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
        {gifts.map((gift, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white border border-green-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-80 w-full rounded-t-2xl overflow-hidden">
              <Image
                src={gift.image}
                alt={gift.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block text-xs uppercase text-green-600 font-semibold mb-2">
                {gift.category}
              </span>
              <h3 className="text-xl font-semibold text-green-900 mb-2">{gift.title}</h3>
              <p className="text-gray-600 text-sm">{gift.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
