import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/nav-logo.svg'
import nav_profile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='admin-navbar-container'>
      <img src={nav_logo} alt='' className='admin-nav-logo'/>
      <img src={nav_profile} alt='' className='admin-nav-logo'/>

    </div>
  )
}

export default Navbar
