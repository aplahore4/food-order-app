import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value.trim()
    const enteredAmountNumber = +enteredAmount

    if (enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false)
      return
    }
    setAmountIsValid(true)
    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          type: 'number',
          id: 'amount',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      ></Input>
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm
