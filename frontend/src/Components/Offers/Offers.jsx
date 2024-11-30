import React from 'react'
import './Offers.css'
import hand_icon from '../Assets/hand_icon.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive Offers For You</h1>
      
            <p>BEST SELLERS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={hand_icon} alt=''/>
        </div>
    </div>
  )
}
