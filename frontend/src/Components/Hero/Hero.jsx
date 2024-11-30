import React from 'react'
import './Hero.css'
import xd from '../Assets/xd.png'

export const Hero = () => {
  return (
    <div className='hero'>
      <img src={xd} alt='Hero' className='hero-img' />
      <div className='separator-bar'></div>
    </div>
  )
}

