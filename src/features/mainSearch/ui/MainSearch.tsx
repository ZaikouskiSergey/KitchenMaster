import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SearchOutlineIcon } from '@/assets/icons'

import s from './MainSearch.module.scss'

type Props = {
  isSign: boolean
  placeholder: string
}

export const MainSearch = ({ isSign, placeholder }: Props) => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const redirectToPage = () => {
    if (value.trim() !== '') {
      setValue('')
      navigate(`browse/search/${value}`)
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    redirectToPage()
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={s.rootSearch}>
        <input
          className={s.searchInput}
          onChange={onChangeHandler}
          placeholder={placeholder}
          value={value}
        />
        {isSign && (
          <button className={s.searchButton} type={'submit'}>
            <SearchOutlineIcon />
          </button>
        )}
      </div>
    </form>
  )
}
