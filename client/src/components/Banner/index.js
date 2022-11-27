import React, { useState, useEffect } from 'react'

const featuredProducts = [
<<<<<<< HEAD
    'img1.jpg', 
    'img3.jpg'
=======
    '/images/img1.jpg', 
    '/images/img3.jpg',
>>>>>>> 29ff6b8fa89727516eb367ae04c9efac5a904726
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
    <div className='max-w-7xl m-auto mb-20  select-none'>
      <div>
        <img
          style={{ maxWidth: '79%', marginLeft: '10%' }}
          src={featuredProducts[currentIndex]}
          alt='bimg'
        />
      </div>
    </div>
  )
}
