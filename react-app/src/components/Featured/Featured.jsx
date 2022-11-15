import React from 'react'

import './featured.css'
import rajs from '../../images/rajs.jpg'
import bang from '../../images/bang.jpg'
import hiran from '../../images/hiran.jpg'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
        <img className='featuredImg' src={rajs} alt="rajs" /> 
        <div className="featuredTitles">
            <h1>Rajasthan</h1>
            <h2>45 properties</h2>
        </div>

        

        </div>

        <div className='featuredItem'>
        <img className='featuredImg' src={hiran} alt="rajs" /> 
        <div className="featuredTitles">
            <h1>Jharkhand</h1>
            <h2>12 properties</h2>
        </div>

        

        </div>

        <div className='featuredItem'>
        <img className='featuredImg' src={bang} alt="rajs" /> 
        <div className="featuredTitles">
            <h1>Banglore</h1>
            <h2>21 properties</h2>
        </div>

        

        </div>

    </div>
  )
}

export default Featured