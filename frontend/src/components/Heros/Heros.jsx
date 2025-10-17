import React from 'react'
import './Heros.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero from '../Assests/hero_image.png'

const Heros = () => {
  return (
    <div className='hero-container'>
        <div className='hero-left'>
            <div className='align'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div className='hero-left-inner'>
                <h1>NEW</h1>
                <img src={hand_icon} alt='hand' className='hand'/>
            </div>
            <h1>COLLECTION</h1>
            <h1>FOR EVERYONE</h1>
            <div className='hero-left-button'>
                <p>latest collection</p>
                <img src={arrow_icon} alt='arrow'/>
            </div>
        </div>
        </div>
        <div className='hero-right'>
            <img src={hero} alt='hero'/>
        </div>
      
    </div>
  )
}

export default Heros
