import { ListMealsType } from '@/entities/meals/model/servieces/meals'
import { ShowIngredient } from '@/features/showIngredient/ui/ShowIngredient'
import { getIngredients } from '@/features/showIngredientsList/utils/getIngredients'
import { Typography } from '@/shared/ui'

import s from './ShowIngredientList.module.scss'
type Props = {
  infoAboutMeal: ListMealsType
}

export const ShowIngredientList = ({ infoAboutMeal }: Props) => {
  const ingredients = getIngredients(infoAboutMeal)

  return (
    <div className={s.rootShowListIngredients}>
      <Typography as={'h3'} variant={'extra_large'}>
        Ingredients
      </Typography>
      <div className={s.show}>
        {ingredients.map((ingredient, index) => (
          <ShowIngredient info={ingredient} key={index} />
        ))}
      </div>
    </div>
  )
}
