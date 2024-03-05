import { Typography } from '@/shared/ui'

import s from './GreetingPart.module.scss'

import image1 from './../../../assets/images/Food1.svg'

export const GreetingPart = () => {
  return (
    <div className={s.greetingRoot}>
      <div className={s.text}>
        <Typography as={'h2'} variant={'extra_large'}>
          Welcome to my cookbook!
        </Typography>
        <Typography as={'p'} variant={'large'}>
          I believe that every visitor to this site will embark on a journey into a world of flavor
          and abundance.
        </Typography>
        <Typography as={'p'} variant={'large'}>
          I hope that everyone discovers a new dish here that they can savor and share with their
          loved ones.
        </Typography>
      </div>
      <div className={s.image}>
        <img alt={'glass'} src={image1} />
      </div>
    </div>
  )
}
