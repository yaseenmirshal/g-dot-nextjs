'use client'

import React from 'react'

const Carostop = () => {
  const bags = [
    {
      id: 1,
      name: 'U-Cut',
      image:
        'https://5.imimg.com/data5/YH/UT/MY-27286833/u-cut-non-woven-carry-bags.jpg',
    },
    {
      id: 2,
      name: 'W CUT',
      image:
        'https://image.made-in-china.com/2f0j00AMPhBkdnpogc/Low-Price-Wholesale-Custom-Logo-Eco-Friendly-W-Cut-Non-Woven-Vest-Bag.webp',
    },
    {
      id: 3,
      name: 'D CUT',
      image:
        'https://cpimg.tistatic.com/08235748/b/4/extra-08235748.jpg',
    },
    {
      id: 4,
      name: 'LOOP HANDLE',
      image:
        'https://images.jdmagicbox.com/quickquotes/images_main/non-woven-loop-handle-bag-2017992147-cmw8srzj.jpg',
    },
    {
      id: 5,
      name: 'PAPER BAGS',
      image:
        'https://m.media-amazon.com/images/I/51hOggPuPBL.jpg',
    },
    {
      id: 6,
      name: 'BIO COVER',
      image:
        'https://i.pinimg.com/736x/2a/ab/16/2aab16c43559dc65f505b3106f6f2bb9.jpg',
    },
    {
      id: 7,
      name: 'JUTE BAGS',
      image:
        'https://i.pinimg.com/736x/31/74/d5/3174d58bcf29d72fc001399fd5d59ee0.jpg',
    },
  
    {
      id: 9,
      name: 'COURIER BAGS',
      image:
        'https://www.packingsupply.in/web/templates/images/products/1521958618-customised-courier-packaging-bags.jpg',
    },
  ]

  return (
    <div id='materials' className="w-full bg-white py-16 pt-72 md:pt-0">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Our Non-Woven Bag Collection
        </h2>

        <div className="grid gap-2.5 md:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
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
                <h3 className="text-md md:text-lg font-semibold text-green-800 mb-3">
                  {bag.name}
                </h3>
                <a
                  href="#contact"
                  className={`inline-block px-2 py-1 md:px-5 md:py-2 rounded-full transition font-medium ${
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
