import { useNavigate } from 'react-router-dom'

import { Typography } from '@/shared/ui'

import s from './ShowIngredient.module.scss'

type Props = {
  info: { ingredient: string; measure: null | string }
  key: number
}
export const ShowIngredient = ({ info }: Props) => {
  const navigate = useNavigate()

  const openCurrentCocktail = () => {
    navigate(`/ingredient/${info.ingredient}`)
  }

  return (
    <div className={s.rootShowIngredient} onClick={openCurrentCocktail}>
      <img
        alt={info.ingredient}
        src={`https://www.themealdb.com/images/ingredients/${info.ingredient}.png`}
      />
      <Typography as={'p'} variant={'medium'}>
        {info.measure} {info.ingredient}
      </Typography>
    </div>
  )
}
