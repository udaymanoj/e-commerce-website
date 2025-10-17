import { useContext } from 'react'
import React from 'react'

import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'



const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
    const {product}=props
     const {id,name,image,new_price,old_price}=product
  return (
    <div className='product-display-container'>
      <div className='product-left'>
        <div className='product-sm-img-container'>
          <img src={image} alt='product' className='product-sm-img'/>
          <img src={image} alt='product' className='product-sm-img'/>
          <img src={image} alt='product' className='product-sm-img'/>
          <img src={image} alt='product' className='product-sm-img'/>
        </div>
        <div>
          <img src={image} alt='prouct'className='product-lg-img'/>
        </div>
      </div>
       <div className='product-right'>
        <h1>{name}</h1>
        <div className='rating-container'>
          <img src={star_icon} alt='rating'/>
          <img src={star_icon} alt='rating'/>
          <img src={star_icon} alt='rating'/>
          <img src={star_icon} alt='rating'/>
          <img src={star_dull_icon} alt='rating'/>
          <p>(20 Reviews)</p>
        </div>
        <div className='price-container'>
          <p className='new-price'>${new_price}</p>
          <p className='old-price'>${old_price}</p>
        </div>
        <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h1 className='Size'>Size</h1>
        <div className='size-container'>
          <div className='container-size'>S</div>
          <div className='container-size'>M</div>
          <div className='container-size'>L</div>
          <div className='container-size'>XL</div>
          <div className='container-size'>XXL</div>
          </div>
          <button className='add-to-cart-btn' onClick={() => addToCart(id)}>Add to Cart</button>
       </div>
    </div>
  )
}

export default ProductDisplay
