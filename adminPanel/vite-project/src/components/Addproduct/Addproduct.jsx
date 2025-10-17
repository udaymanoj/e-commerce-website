import React, { useState } from 'react'
import './Addproduct.css'
import upload_area from '../../assets/upload_area.svg'

const Addproduct = () => {
  const [image,setimage]=useState(false)
  const [productdetails,setproductdetails]=useState({
    name:'',
    image:'',
    category:'men',
    new_price:'',
    old_price:'',
     available: true
  })
 
  const changeimage=(event)=>
  {
    setimage(event.target.files[0])
  }

  const changeHandler=(event)=>
  {
    setproductdetails({...productdetails,[event.target.name]:event.target.value})
  }
  
  const onAdd=async()=>
  {
    console.log(productdetails)
    let responseData;
    let product=productdetails;
    let formData=new FormData();
  formData.append("product",image);

    
    await fetch('http://localhost:3000/upload',{
      method:"POST",
      headers:{
        Accept:'application/json'
      },
      body:formData,
    }).then((res)=>res.json()).then((data)=>{responseData=data})

    
    if(responseData.success)
    {
      product.image=responseData.image_url
      console.log(product.image)
      await fetch('http://localhost:3000/addproducts',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(product)
      }).then((res)=>res.json()).then((data)=>{
        data.success?alert("product added"):alert("failed")
      })
    }

  }
  return (
    <div className='addproduct-container'>
      <div className='addproduct-inputField-container'>
        <label htmlFor='product-title'>Product title</label>
        <input value={productdetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' id='product-title' className='input'/>
      </div>
         <div className='addproduct-price-container'>
      <div className='addproduct-inputField-container'>
        <label htmlFor='price'>Price </label>
        <input value={productdetails.old_price} onChange={changeHandler} name='old_price' type='text' placeholder='Type here' id='price' className='input'/>
      </div>
   
      <div className='addproduct-inputField-container'>
        <label htmlFor='offer-price'>Offer-price</label>
        <input value={productdetails.new_price} onChange={changeHandler} name='new_price' type='text' placeholder='Type here' id='offer-price' className='input'/>
      </div>
      </div>
      <div className='addproduct-inputField-container'>
       <label htmlFor="category">Category</label>

      <select value={productdetails.category} onChange={changeHandler} name="category" id="category" className='dropdown'>
        <option value="men">Mens</option>
        <option value="women">Womens</option>
        <option value="kid">Kids</option>
    </select>
      </div>
      <div className='addproduct-inputField-container'>
        <label htmlFor='uploadimg'>
          <img src={image?URL.createObjectURL(image):upload_area} alt=''/>
        </label>
        <input type='file' id='uploadimg' onChange={changeimage}/>
      </div>
      <button onClick={()=>{onAdd()}}type='button' className='add-button'>ADD</button>
    </div>
  )
}

export default Addproduct
