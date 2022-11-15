import React from 'react'
import './propertyList.css'
import hotel1 from '../../images/hotel1.jpg'
import hotel2 from '../../images/hotel2.jpg'
import hotel3 from '../../images/hotel3.jpg'
import hotel4 from '../../images/hotel4.jpg'
import hotel5 from '../../images/hotel5.jpg'
import hotel6 from '../../images/hotel6.jpg'

import a1 from '../../images/a1.jfif'
import a2 from '../../images/a2.jfif'
import a3 from '../../images/a3.jfif'
import a4 from '../../images/a4.jfif'
import a5 from '../../images/a5.jfif'

const PropertyList = () => {

  return (
    <div className='plist'>
        <div className="plistItem">
            <img className='plistImg' src={a1} alt="hotel1" />
            <div className="plistTitles">
                <h1>Dhanbad</h1>
                <h2>120 flights</h2>
            </div>
        </div>
        <div className="plistItem">
            <img className='plistImg' src={a2} alt="hotel1" />
            <div className="plistTitles">
                <h1>Ranchi</h1>
                <h2>150 flights</h2>
            </div>
        </div>
        <div className="plistItem">
            <img className='plistImg' src={a3} alt="hotel1" />
            <div className="plistTitles">
                <h1>Bokaro</h1>
                <h2>110 flights</h2>
            </div>
        </div>
        <div className="plistItem">
            <img className='plistImg' src={a4} alt="hotel1" />
            <div className="plistTitles">
                <h1>Hazaribagh</h1>
                <h2>90 flights</h2>
            </div>
        </div>
        <div className="plistItem">
            <img className='plistImg' src={a5} alt="hotel1" />
            <div className="plistTitles">
                <h1>Jamshedpur</h1>
                <h2>200 flights</h2>
            </div>
        </div>
       

    </div>
  )
}

export default PropertyList