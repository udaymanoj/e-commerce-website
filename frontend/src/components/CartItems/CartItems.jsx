import React from 'react'
import './CartItems.css'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../Assests/cart_cross_icon.png'

const CartItems = () => {
    const {all_products,cartItems,removeFromCart,getTotalAmount} = useContext(ShopContext);
  return (
    <div className='cart-container'>
        <div className='cart_container-main'>
            <p>PRODUCTS</p>
            <p>TITLE</p>
            <p>PRICE</p>
            <p>QUNTITY</p>
            <p>total</p>
            <p>remove</p>
         
        </div>
        <hr/>
        <div>
            {all_products.map((products)=>{
                if(cartItems[products.id] >0){
                    return(
                        <div>
                        <div key={products.id} className='cart_container-main cart-product-item'>
                            <img src={products.image} alt={products.title} className='cart-product-image'/>
                            <p>{products.name}</p>
                            <p>{products.new_price}</p>
                            <button className='cart-quantity-button'>{cartItems[products.id]}</button>
                           <p>{cartItems[products.id] * products.new_price}</p>
                            <img src={remove_icon} alt='remove' onClick={()=>removeFromCart(products.id)} className='remove-icon'/>
                        </div>
                       <div><hr/></div>
                       </div>
                    
                    )
                }
                return null;
            })}
        </div>
            <div className='cart-down-container'>
            <div className='cart-down-left'>
            <h1 className='cart-heading'>CART TOTALS</h1>    
            <div className='cart-total-item'>
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
            </div>
            <hr className='cart-divider'/>
            <div className='cart-total-item'>
                <p>Shipping Fee</p>
                <p>Fee</p>
            </div>
            <hr className='cart-divider'/>
            <div className='cart-total-item'>
                <p>Total</p>
                <p>${getTotalAmount()}</p>
            </div>
            <hr className='cart-divider'/>
            <button className='checkout-button'>Proceed to checkout</button>
            </div>
           
            <div className='cart-down-right'>
                <p>
                    If You Have a Coupon Code, Please Apply It Below.
                </p>
                <div className='coupon-container'>
                    <input type='text' placeholder='Coupon code' className='coupon-input'/>
                    <button className='apply-coupon-button'>Apply coupon</button>
                </div>
            </div>
             </div>    
    </div>
  )
}

export default CartItems
