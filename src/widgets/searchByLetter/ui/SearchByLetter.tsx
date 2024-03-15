import { useNavigate } from 'react-router-dom'

import { ALPHABET } from '@/shared/const/constants'
import { Typography } from '@/shared/ui'

import s from './SearchByLetter.module.scss'

export const SearchByLetter = () => {
  const alphabet = ALPHABET.split('')
  const navigate = useNavigate()
  const handleClickLetter = (letter: string) => {
    navigate(`browse/letter/${letter}`)
  }

  return (
    <div className={s.searchByLetter}>
      {' '}
      <Typography as={'h3'} variant={'extra_large'}>
        Browse By Letter
      </Typography>
      <div className={s.alphabet}>
        {alphabet.map((letter, index) => (
          <div key={letter}>
            <span className={s.everyLetter} onClick={() => handleClickLetter(letter)}>
              {letter}
            </span>
            {index !== alphabet.length - 1 && <span>{' /'}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
