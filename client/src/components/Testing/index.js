import React, { useEffect } from 'react'
import MenFashion from '../../assets/menfashion.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './box.css'

export const Testing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <img  src={MenFashion}/>
  )
}
