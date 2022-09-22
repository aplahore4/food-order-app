import React from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
  const cartContext = {}
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
