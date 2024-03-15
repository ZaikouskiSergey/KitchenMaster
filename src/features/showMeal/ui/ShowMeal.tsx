import { useNavigate } from 'react-router-dom'

import { ListMealsType } from '@/entities/meals/model/servieces/meals'
import { Typography } from '@/shared/ui'

import s from './ShowMeal.module.scss'

type Props = {
  aboutMeals: ListMealsType
}
export const ShowMeal = ({ aboutMeals }: Props) => {
  const navigate = useNavigate()
  const selectCategoryHandler = () => {
    navigate(`/meal/${aboutMeals.strMeal}`)
  }

  return (
    <div className={s.rootMeals} onClick={selectCategoryHandler}>
      <img alt={aboutMeals.strMeal} src={aboutMeals.strMealThumb} />
      <Typography as={'p'} variant={'medium'}>
        {aboutMeals.strMeal}
      </Typography>
    </div>
  )
}
