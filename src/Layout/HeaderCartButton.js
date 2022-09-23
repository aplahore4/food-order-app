import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = (props) => {
  const btnClasses = classes.button

  return (
    <button className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  )
}

export default HeaderCartButton
