import { useNavigate } from 'react-router-dom'

import { CategoryType } from '@/entities/meals/model/servieces/meals'
import { Typography } from '@/shared/ui'

import s from './ShowCategory.module.scss'
type Props = {
  aboutMeals: CategoryType
}
export const ShowCategory = ({ aboutMeals }: Props) => {
  const navigate = useNavigate()
  const selectCategoryHandler = () => {
    navigate(`/category/${aboutMeals.strCategory}`)
  }

  return (
    <div className={s.rootCategory} onClick={selectCategoryHandler}>
      <img alt={aboutMeals.strCategory} src={aboutMeals.strCategoryThumb} />
      <Typography as={'p'} variant={'medium'}>
        {aboutMeals.strCategory}
      </Typography>
    </div>
  )
}
