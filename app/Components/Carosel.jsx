'use client'

import React from 'react'

const Carostop = () => {
  const bags = [
    {
      id: 1,
      name: 'U-Cut Eco Bag',
      image:
        'https://i.pinimg.com/736x/31/21/6e/31216e0365b695ba51ca8ac895fdded8.jpg',
    },
    {
      id: 2,
      name: 'W CUT Eco Bag',
      image:
        'https://image.made-in-china.com/2f0j00AMPhBkdnpogc/Low-Price-Wholesale-Custom-Logo-Eco-Friendly-W-Cut-Non-Woven-Vest-Bag.webp',
    },
    {
      id: 3,
      name: 'D CUT Eco Bag',
      image:
        'https://cpimg.tistatic.com/08235748/b/4/extra-08235748.jpg',
    },
    {
      id: 4,
      name: 'LOOP HANDLE Eco Bag',
      image:
        'https://i.pinimg.com/736x/92/01/5f/92015f4b3999d1a4f6c6b9bde6e4642e.jpg',
    },
    {
      id: 5,
      name: 'PAPER BAGS',
      image:
        'https://i.pinimg.com/736x/e0/88/09/e08809d381afd299f10513c38e74df3b.jpg',
    },
    {
      id: 6,
      name: 'BIO COVER',
      image:
        'https://i.pinimg.com/736x/2a/ab/16/2aab16c43559dc65f505b3106f6f2bb9.jpg',
    },
    {
      id: 7,
      name: 'TISSUE PAPER',
      image:
        'https://i.pinimg.com/736x/ff/df/db/ffdfdb7830ea6f301c2bfa667050a2e8.jpg',
    },
    {
      id: 8,
      name: 'Need Custom Packaging?',
      image:
        'https://i.pinimg.com/736x/99/54/28/995428cd64ab6450f0119065f8231c03.jpg',
      contactCard: true,
    },
  ]

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Our Non-Woven Bag Collection
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {bags.map((bag) => (
            <div
              key={bag.id}
              className="bg-green-50 rounded-xl overflow-hidden shadow hover:shadow-xl hover:scale-[1.03] transition-all duration-300 w-full max-w-xs"
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={bag.image.replace(/^hhttps/, 'https')} // fix typo
                  alt={bag.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  {bag.name}
                </h3>
                <a
                  href="#contact"
                  className={`inline-block px-5 py-2 rounded-full transition font-medium ${
                    bag.contactCard
                      ? 'bg-white text-green-700 border border-green-700 hover:bg-green-100'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {bag.contactCard ? 'Contact Us' : 'Enquire Now'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carostop
