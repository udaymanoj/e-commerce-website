import { useEffect, useState } from "react";
import React from "react";
export const ShopContext = React.createContext();
 

  const getDefaultcart=()=>{
        let cart={};
        for(let index=0;index<300+1;index++){
            
            cart[index]=0;
    }
    return cart;
    }



const ShopProvider = ({ children }) => {

 
    const [cartItems,setcartItems]=useState(getDefaultcart());
     const [all_product,setall_product]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/allproducts')
    .then((res)=>res.json()).then((data)=>setall_product(data))

    if(localStorage.getItem('auth_token'))
    {
      fetch('http://localhost:3000/getcart',{
        method:'POST',
        headers:{
          Accept:"application/json",
          "auth_token": `${localStorage.getItem("auth_token")}`,
           "Content-Type":"application/json"
        },
        body:"",
      }).then((res)=>res.json()).then((data)=>{setcartItems(data)})
    }
  },[])

    const all_products = all_product;

    const addToCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth_token'))
        {
            fetch('http://localhost:3000/addtocart',{
              method:"POST",
              headers:{
                Accept:"application/form-data",
               "auth_token": `${localStorage.getItem("auth_token")}`,
                "Content-Type":"application/json"
              },
              body:JSON.stringify({"itemId":itemId})
            }).then((res)=>res.json()).then((data)=>console.log(data))
        }
    }
    const removeFromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth_token'))
        {
            fetch('http://localhost:3000/removecart',{
              method:"POST",
              headers:{
                Accept:"application/form-data",
               "auth_token": `${localStorage.getItem("auth_token")}`,
                "Content-Type":"application/json"
              },
              body:JSON.stringify({"itemId":itemId})
            }).then((res)=>res.json()).then((data)=>console.log(data))
        } 

    }
   const getTotalAmount = () => {
  let total = 0;
  for (const id in cartItems) {
    if (cartItems[id] > 0) {
      const product = all_products.find(p => p.id === Number(id));
      if (product) {
        total += product.new_price * cartItems[id];
      }
    }
  }
  return total;
};

  const getCartCount=()=>
  {
    let total=0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        total+=cartItems[item]
      }
    }
    return total;
  }
    return (

        <ShopContext.Provider value={{all_products, cartItems, addToCart, removeFromCart,getTotalAmount,getCartCount}}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopProvider;