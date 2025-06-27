'use client'

import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carostop = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalTime = 3000

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % bags.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, intervalTime)
    return () => clearInterval(interval)
  }, [currentIndex])

  const bags = [
    {
      id: 1,
      name: 'U-Cut Eco Bag',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/12/370032278/PA/SB/TW/195928338/printed-non-woven-bag-500x500.jpg',
    },
    {
      id: 2,
      name: 'Loop Handle Bag',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2022/12/UK/VY/YM/144942300/non-woven-carry-bag-500x500.jpg',
    },
    {
      id: 3,
      name: 'Custom Printed Bag',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2021/6/FO/DO/MQ/2688126/printed-non-woven-carry-bag-500x500.jpg',
    },
    {
      id: 4,
      name: 'Box Type Bag',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2022/10/NY/SH/UU/146329189/box-type-non-woven-bag-500x500.jpg',
    },
    {
      id: 5,
      name: 'D-Cut Grocery Bag',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2022/8/CB/VC/VC/147506242/non-woven-d-cut-bag-500x500.jpg',
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Our Non-Woven Bag Collection
        </h2>

        <Slider {...settings}>
          {bags.map((bag) => (
            <div key={bag.id} className="p-4">
              <div className="bg-green-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div
                  className="bg-cover bg-center h-64"
                  style={{ backgroundImage: `url(${bag.image})` }}
                ></div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">
                    {bag.name}
                  </h3>
                  <a
                    href="#contact"
                    className="inline-block bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
                  >
                    Enquiry
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Carostop
