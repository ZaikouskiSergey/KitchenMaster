import { useParams } from 'react-router-dom'

import {
  ListMealsType,
  useGetInfoAboutMealByNameQuery,
} from '@/entities/meals/model/servieces/meals'
import { Typography } from '@/shared/ui'
import { BrowseMeals } from '@/widgets/browseMeals'

import s from './BrowseMealBySearchPage.module.scss'

export const BrowseMealBySearchPage = () => {
  const { letters } = useParams()
  const { data } = useGetInfoAboutMealByNameQuery({ name: letters })
  const listOfMeals = data ? data.meals : ([] as Array<ListMealsType>)

  return (
    <div className={s.rootByLetter}>
      <Typography as={'h3'} variant={'extra_large'}>
        Browse Meals
      </Typography>
      <BrowseMeals listOfMeals={listOfMeals} />
    </div>
  )
}
