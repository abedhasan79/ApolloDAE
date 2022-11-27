import React from 'react'
import MenFashion from '../../assets/menfashion.jpg'
import WomenFashion from "../../assets/womens.jpg"
import './box.css'

export const Testing = () => {
  return (
    <div id="fade-in-header">
      <h1 className="glow" >Fashion of the Week</h1>
      <p style={{textAlign: "center"}}>Shop for clothes now!</p>
      <div className='fadeimage'>
        <img src={MenFashion} />
      </div>
      <h1></h1>
      <div className='fadeimage'>
        <img src={WomenFashion} />
      </div>
    </div>
  )
}
