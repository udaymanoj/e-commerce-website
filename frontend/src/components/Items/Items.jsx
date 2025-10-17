import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'


const Items = (props) => {
    const {details}=props
    const {id,name,image,new_price,old_price}=details
  return (
    <li className='item-container card'>
      <Link to={`/product/${id}`}>
      <img onClick={() => window.scrollTo(0, 0)} src={image} alt='women'/>
      </Link>
      
      <p className='name'>{name}</p>
      <div className='item-price'>
        <p>${new_price}</p>
        <p className='old-price'>${old_price}</p>
      </div>
    </li>
  )
}

export default Items
