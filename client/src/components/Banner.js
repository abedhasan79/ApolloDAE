import React, { useState, useEffect } from 'react'

const featuredProducts = [
  // <img src={img1} alt="potato"/>
  '/img/img1.jpg',
  '/img/img3.jpg',
]

let count = 0

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    startBanner()
  }, [])

  const startBanner = () => {
    setInterval(() => {
      handleOnNextClick()
    }, 3000)
  }

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length
    setCurrentIndex(count)
  }


  return (
    <div className='max-w-7xl m-auto mb-20  select-none relative'>
      <div className='aspect-w-10 aspect-h-9'>
        <img src={featuredProducts[currentIndex]} alt='bannerimg' />
      </div>

    </div>
  )
}
