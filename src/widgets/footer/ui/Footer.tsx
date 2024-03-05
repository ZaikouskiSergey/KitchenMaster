import { Link } from 'react-router-dom'

import { GithubIcon } from '@/assets/icons/GithubIcon'
import { LinkedInIcon } from '@/assets/icons/LinkedInIcon'
import { TelegramIcon } from '@/assets/icons/TelegramIcon'
import { Typography } from '@/shared/ui'

import s from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={s.root}>
      <div>
        <Typography as={'span'} variant={'small'}>
          © 2024 KitchenMaster
        </Typography>
      </div>
      <Link to={'https://bar-master.vercel.app/'}>
        <h2 className={s.text}>The BarMaster</h2>
      </Link>
      <div className={s.contacts}>
        <Link target={'_blank'} to={'https://www.linkedin.com/in/siarhei-zaikouski/'}>
          <LinkedInIcon height={'20px'} />
        </Link>
        <Link target={'_blank'} to={'https://t.me/SergeyZaikouski'}>
          <TelegramIcon height={'20px'} />
        </Link>
        <Link target={'_blank'} to={'https://github.com/ZaikouskiSergey'}>
          <GithubIcon height={'20px'} />
        </Link>
      </div>
    </div>
  )
}
