import { useParams } from 'react-router-dom'

import {
  MealsContainIngredientType,
  useGetListMealsByCategoryQuery,
} from '@/entities/meals/model/servieces/meals'
import { Typography } from '@/shared/ui'
import { BrowseMeals } from '@/widgets/browseMeals'

import s from './MealByCategoryPage.module.scss'

export const MealByCategoryPage = () => {
  const { name } = useParams()
  const { data } = useGetListMealsByCategoryQuery({ category: name })
  const listMeals = data ? data.meals : ([] as Array<MealsContainIngredientType>)

  return (
    <div className={s.rootMealsCategory}>
      <Typography as={'h3'} variant={'large'}>
        Food category: {name}
      </Typography>
      <BrowseMeals listOfMeals={listMeals} />
    </div>
  )
}
