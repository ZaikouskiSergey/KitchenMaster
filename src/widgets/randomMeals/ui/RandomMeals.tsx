import { ListMealsType, useGetOneRandomMealQuery } from '@/entities/meals/model/servieces/meals'
import { Typography } from '@/shared/ui'
import { BrowseMeals } from '@/widgets/browseMeals'

import s from './RandomMeals.module.scss'

export const RandomMeals = () => {
  const { data } = useGetOneRandomMealQuery({})
  const randomMeal = data ? data.meals : ([] as Array<ListMealsType>)

  return (
    <div className={s.rootMeals}>
      <Typography as={'h3'} variant={'extra_large'}>
        Random Meal
      </Typography>
      <BrowseMeals listOfMeals={randomMeal} />
    </div>
  )
}
