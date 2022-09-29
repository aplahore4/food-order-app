import React, { useState, useContext, useEffect } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../store/cart-context'

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlighted(true)
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  return (
    <button className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
