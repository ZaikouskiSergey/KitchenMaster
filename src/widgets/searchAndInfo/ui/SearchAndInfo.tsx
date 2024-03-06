import { MainSearch } from '@/features/mainSearch'

import s from './SearchAndInfo.module.scss'

export const SearchAndInfo = () => {
  return (
    <div className={s.rootInfoAndSearch}>
      <MainSearch isSign placeholder={'Search for a Meal...'} />
    </div>
  )
}
