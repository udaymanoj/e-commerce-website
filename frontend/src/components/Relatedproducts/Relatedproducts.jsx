import React from 'react'
import './Relatedproducts.css'
import data from '../Assests/data.js'
import Items from '../Items/Items'

const Relatedproducts = () => {
    console.log(data)
  return (
    <div className='related-products-container'>
        <h1>RELATED PRODUCTS</h1>
        <hr className='related-products-hr'/>
        <ul className='related-products-list'>
            {data.map((each)=>(<Items key={each.id} details={each}/>))}
        </ul>
    </div>
  )
}

export default Relatedproducts
