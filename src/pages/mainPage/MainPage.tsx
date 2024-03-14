import { SeparateLine } from '@/shared/ui'
import { GreetingPart } from '@/widgets/greetingPart'
import { MealCategories } from '@/widgets/mealCategories'
import { RandomMeals } from '@/widgets/randomMeals'
import { SearchAndInfo } from '@/widgets/searchAndInfo'

import s from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={s.rootMainPage}>
      <GreetingPart />
      <SeparateLine />
      <SearchAndInfo />
      <SeparateLine />
      <RandomMeals />
      <SeparateLine />
      <MealCategories />
      <SeparateLine />
    </div>
  )
}
