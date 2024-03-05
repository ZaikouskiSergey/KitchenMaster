import { SeparateLine } from '@/shared/ui'
import { GreetingPart } from '@/widgets/greetingPart'
import { MainSearch } from '@/widgets/mainSearch'
import { RandomMeals } from '@/widgets/randomMeals'

import s from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={s.rootMainPage}>
      <GreetingPart />
      <SeparateLine />
      <MainSearch />
      <SeparateLine />
      <RandomMeals />
      <SeparateLine />
    </div>
  )
}
