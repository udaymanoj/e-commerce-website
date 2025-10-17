import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import remove_icon from '../../assets/cart_cross_icon.png'

const Listproduct = () => {

  const [allproducts,setallproducts]=useState([])

  const fetch_info=async()=>
  {
    await fetch("http://localhost:3000/allproducts").then((res)=>res.json()).then((data)=>{
      setallproducts(data)
    })
  }
    useEffect (()=>{
      fetch_info()
    },[])

  const removeProduct=async(id)=>
  {
    await fetch('http://localhost:3000/removeproduct',{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetch_info()
  }
  return (
    <div className='listproducts-container'>
      <h1>All products</h1>
      <div className='listproducts-title-cotainer'>
        <p>Product</p>
        <p>Title</p>
        <p>Old_price</p>
        <p>New_price</p>
        <p>Category</p>
        <p>remove</p>
      </div>
      <div className='listproduct-allproducts'>
        <hr/>
        {allproducts.map((product,index)=>{
          return <div key={index} className='listproduct-items'>
            <img src={product.image} alt='' className='listproduct-img'/>
            <p>{product.name}</p>
            <p>{product.old_price}</p>
            <p>{product.new_price}</p>
            <p>{product.category}</p>
            <img src={remove_icon} alt='' onClick={()=>{removeProduct(product.id)}}/>
            <hr/>
          </div>
        })}
      </div>
    </div>
  )
}

export default Listproduct
