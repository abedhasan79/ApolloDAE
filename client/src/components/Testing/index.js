import React, { useEffect } from 'react'
import MenFashion from '../../assets/menfashion.jpg'
import WomenFashion from "../../assets/womens.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css'
import './box.css'

export const Testing = () => {
  useEffect(() => {
    Aos.init({ duration: 5000 })
  }, [])
  return (
    <div>
      <h1 className="glow" >Fashion of the Week</h1>
      <p style={{textAlign: "center"}}>Shop for clothes now!</p>
      <div className='fadeimage'>
        <img src={MenFashion} />
      </div>
      <div  className='fadeimage'>
        <img src={WomenFashion} />
      </div>
    </div>
  )
}
