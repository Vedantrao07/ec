import React, { useContext } from 'react'
import './cartItems.css'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
    const {all_products, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        
    </div>
  )
}

export default CartItems
