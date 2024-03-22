import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Typography } from '@/shared/ui'

import s from './ShowFlag.module.scss'

import sprite from './../../../assets/images/flags/flagsSprite.svg'

type Props = {
  nationality: string
}
export const ShowFlag = ({ nationality }: Props) => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const handleMouseMove = (event: MouseEvent) => {
    const boundingRect = event.currentTarget.getBoundingClientRect()

    setPosition({ x: event.clientX - boundingRect.left, y: event.clientY - boundingRect.top })
  }
  const openPageOfCountry = () => {
    navigate(`browse/${nationality}`)
  }

  return (
    <div
      className={s.rootFlag}
      onClick={openPageOfCountry}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <svg viewBox={'0 0 640 480'} xmlns={'http://www.w3.org/2000/svg'}>
        <use xlinkHref={`${sprite}#${nationality}`} />
      </svg>
      {isHovered && (
        <div className={s.info} style={{ left: position.x - 35, top: position.y - 30 }}>
          <Typography variant={'small_bold'}>{nationality}</Typography>
        </div>
      )}
    </div>
  )
}
