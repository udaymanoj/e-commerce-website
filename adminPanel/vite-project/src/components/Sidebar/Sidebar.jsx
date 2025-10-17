import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidecontainer'>
      <Link to='/addproducts'>
        <div className='sideproduct-container'>
            <img src={add_product_icon} alt=""/>
            <p>Add product</p>
        </div>
      </Link>
      <Link to='/productlist'>
        <div className='sideproduct-container'>
            <img src={list_product_icon} alt=''/>
            <p>product list</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
