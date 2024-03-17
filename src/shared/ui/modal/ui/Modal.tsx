import { ReactNode, useEffect } from 'react'

import s from './Modal.module.scss'

type Props = {
  children: ReactNode
  setShowModal: (showModal: boolean) => void
  showModal: boolean
}
export const Modal = ({ children, setShowModal, showModal }: Props) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowModal(false)
      }
    }

    if (showModal) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showModal, setShowModal])

  return (
    <div
      className={`${s.modal} ${showModal && s.active}`}
      onClick={event => event.stopPropagation()}
    >
      <div className={s.content} onClick={() => setShowModal(false)}>
        {children}
      </div>
    </div>
  )
}
