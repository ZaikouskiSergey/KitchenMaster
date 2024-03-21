import { useParams } from 'react-router-dom'

import {
  ListMealsType,
  useGetListMealsByCountryQuery,
} from '@/entities/meals/model/servieces/meals'
import { Typography } from '@/shared/ui'
import { BrowseMeals } from '@/widgets/browseMeals'

import s from './BrowseMealByCountryPage.module.scss'

export const BrowseMealByCountryPage = () => {
  const { country } = useParams()
  const { data } = useGetListMealsByCountryQuery({ country })
  const listOfMeals = data ? data.meals : ([] as Array<ListMealsType>)

  return (
    <div className={s.rootByCountry}>
      <Typography as={'h3'} variant={'extra_large'}>
        Meals of {country}
      </Typography>
      <BrowseMeals listOfMeals={listOfMeals} />
    </div>
  )
}
