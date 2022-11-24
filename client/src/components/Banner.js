import React, { useState, useEffect } from 'react'

const featuredProducts = [
  // <img src={img1} alt="potato"/>
  '/img/img1.jpg',
  '/img/img2.png',
  '/img/img3.gif'
]

let count = 0

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(1)

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
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length
    count = (currentIndex + productsLength - 1) % productsLength
    setCurrentIndex(count)
  }

  return (
    <div className='max-w-screen-xl m-auto mb-20 w-max w-full select-none relative'>
      <div className='aspect-w-16 aspect-h-9'>
        <img src={featuredProducts[currentIndex]} alt='' />
      </div>

      <div className='absolute w-full top-1/2 transform translate-y-1/2 px-3 flex justify-between items-center'>
        <button onClick={handleOnPrevClick}>Previous</button>
        <button onClick={handleOnNextClick}>Next</button>
      </div>
    </div>
  )
}
