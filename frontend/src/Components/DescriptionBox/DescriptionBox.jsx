import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>The 141 Convenience Store is a retail chain in Zenless Zone Zero. As their name suggests, they are small shops that sell various goods. In-game, the shops allows the player to purchase leveling, agent promotion, W-Engine Modification, and agent skill Items of varying ranks. It can be found in both Sixth Street and Lumina Square, and now as a E-commerce too.
            </p>
        </div>
    </div>
  )
}
