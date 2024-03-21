import { ShowFlag } from '@/features/showFlag/ui/ShowFlag'
import { COUNTRIES } from '@/shared/const/constants'
import { Typography } from '@/shared/ui'

import s from './MealsOfCountry.module.scss'

export const MealsOfCountry = () => {
  return (
    <div className={s.rootCountries}>
      <Typography as={'h3'} variant={'extra_large'}>
        Browse Country
      </Typography>
      <div className={s.flags}>
        {COUNTRIES.map((el, index) => (
          <ShowFlag key={index} nationality={el.strArea} />
        ))}
      </div>
    </div>
  )
}
