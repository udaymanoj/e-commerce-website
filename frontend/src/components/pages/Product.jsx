import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../ProductDisplay/ProductDisplay.jsx'
import DiscriptionBox from '../DiscriptionBox/DiscriptionBox.jsx'
import Relatedproducts from '../Relatedproducts/Relatedproducts.jsx'

const Product = () => {
  const {productId} = useParams();
  const {all_products} = useContext(ShopContext)


  const product=all_products.find((each)=>each.id===Number(productId));
  return (
    <div>
      <ProductDisplay product={product}/>
      <DiscriptionBox/>

      <Relatedproducts/>
    </div>
  )
}

export default Product
