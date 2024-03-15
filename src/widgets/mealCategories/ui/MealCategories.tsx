import { CategoryType, useGetListOfCategoriesQuery } from '@/entities/meals/model/servieces/meals'
import { ShowCategory } from '@/features/showCategory'
import { Typography } from '@/shared/ui'

import s from './MealCategories.module.scss'
export const MealCategories = () => {
  const { data } = useGetListOfCategoriesQuery({})
  const categoriesOfMeal = data ? data.categories : ([] as Array<CategoryType>)

  return (
    <div className={s.rootCategories}>
      <Typography as={'h3'} variant={'extra_large'}>
        Meal categories
      </Typography>
      <div className={s.oneOfCategory}>
        {categoriesOfMeal.map(el => {
          return <ShowCategory aboutMeals={el} key={el.idCategory} />
        })}
      </div>
    </div>
  )
}
