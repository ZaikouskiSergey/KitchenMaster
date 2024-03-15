import { useParams } from 'react-router-dom'

import {
  ListMealsType,
  useGetListMealsByFirstLetterQuery,
} from '@/entities/meals/model/servieces/meals'
import { Typography } from '@/shared/ui'
import { BrowseMeals } from '@/widgets/browseMeals'

import s from './BrowseMealByLetterPage.module.scss'

export const BrowseMealByLetterPage = () => {
  const { letter } = useParams()
  const { data } = useGetListMealsByFirstLetterQuery({ letter })
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
