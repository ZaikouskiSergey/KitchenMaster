import { ListMealsType, MealsContainIngredientType } from '@/entities/meals/model/servieces/meals'
import { ShowMeal } from '@/features/showMeal'

import s from './BrowseMeals.module.scss'

type Props = {
  listOfMeals: Array<ListMealsType> | Array<MealsContainIngredientType>
}
export const BrowseMeals = ({ listOfMeals }: Props) => {
  return (
    <div className={s.rootBrowseMeals}>
      {listOfMeals && listOfMeals.map(meal => <ShowMeal aboutMeals={meal} key={meal.idMeal} />)}
    </div>
  )
}
