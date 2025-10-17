import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Assests/dropdown_icon.png'
import Items from '../Items/Items'
import './css/ShopCategory.css'

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='category-container'>
     <img src={props.banner} alt="banner" className='banner'/>
     <div className='category-info'>
        <p>
          <span>showing results 1-12 out of 36</span>
        </p>
        <div className='sortby'>
          Sort by <img src={dropdown_icon} alt='dropdown icon'/>
        </div>
     </div>
     <ul>
      {all_products.map((each)=>{
        if(each.category === props.category){
          return <Items details={each} key={each.id}/>
        }
        return null;
      })}
          </ul>

    </div>
  )
}

export default ShopCategory
