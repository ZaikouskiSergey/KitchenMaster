import { Link } from 'react-router-dom'

import { HeaderImage } from '@/assets/icons/HeaderImage'
import { MainSearch } from '@/features/mainSearch'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <div className={s.rootHeader}>
      <Link className={s.link} to={'/'}>
        <HeaderImage />
        <h1 className={s.text}>The KitchenMaster</h1>
      </Link>

      <div className={s.input}>
        <MainSearch isSign={false} placeholder={'search'} />
      </div>
    </div>
  )
}
