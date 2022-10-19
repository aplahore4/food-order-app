import React, { useEffect, useState } from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import useHttp from '../hooks/use-http'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const { isLoading, error: httpError, sendRequest: fetchMeals } = useHttp()

  useEffect(() => {
    const transformMeals = (mealsObj) => {
      const loadMeals = []
      for (const key in mealsObj) {
        loadMeals.push({
          id: key,
          name: mealsObj[key].name,
          description: mealsObj[key].description,
          price: mealsObj[key].price,
        })
      }

      setMeals(loadMeals)
    }

    fetchMeals(
      {
        url: 'https://react-39886-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json',
      },
      transformMeals
    )
  }, [fetchMeals])

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

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
