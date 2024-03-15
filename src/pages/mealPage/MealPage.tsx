import { useParams } from 'react-router-dom'

import s from './MealPage.module.scss'

export const MealPage = () => {
  const { name } = useParams()

  return <div className={s.rootMeal}>{name}</div>
}
