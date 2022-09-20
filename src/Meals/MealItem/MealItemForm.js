import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = () => {
  const submitHandler = (event) => {
    event.preventDefault()
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
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
    </form>
  )
}

export default MealItemForm
