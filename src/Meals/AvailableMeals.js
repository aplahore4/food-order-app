import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {
  const meals = [
    {
      key: 1,
      id: 1,
      name: 'A',
      description: 'D',
      price: 10,
    },
    {
      key: 2,
      id: 2,
      name: 'A',
      description: 'D',
      price: 10,
    },
    {
      key: 3,
      id: 3,
      name: 'A',
      description: 'D',
      price: 10,
    },
    {
      key: 4,
      id: 4,
      name: 'A',
      description: 'D',
      price: 10,
    },
    {
      key: 5,
      id: 5,
      name: 'A',
      description: 'D',
      price: 10,
    },
  ]
  const mealsList = meals.map((meal, index) => (
    <MealItem
      key={index}
      id={index}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
