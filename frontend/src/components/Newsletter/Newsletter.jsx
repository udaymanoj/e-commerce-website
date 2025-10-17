import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter-container'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to out Newsletter and stay updated</p>
      <div className='newletter-input'>
        <input placeholder='Your Email id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
