import React from 'react'
import './Offers.css'
import exclusive_image from '../Assests/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offer-container'>
        <div className='offer-left'>
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON THE BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offer-right'>
            <img src={exclusive_image} alt='exclusive'/>
        </div>
    </div>
  )
}

export default Offers
