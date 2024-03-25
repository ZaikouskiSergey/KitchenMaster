import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import {
  ListMealsType,
  useGetInfoAboutMealByNameQuery,
} from '@/entities/meals/model/servieces/meals'
import { ShowIngredientList } from '@/features/showIngredientsList'
import { Typography } from '@/shared/ui'
import { Modal } from '@/shared/ui/modal/ui'

import s from './MealPage.module.scss'

export const MealPage = () => {
  const { name } = useParams()
  const [showPicture, setShowPicture] = useState(false)
  const { data } = useGetInfoAboutMealByNameQuery({ name })

  const properMeal = data && data.meals ? data.meals[0] : ({} as ListMealsType)
  const instructions = properMeal.strInstructions
    ? properMeal.strInstructions.split('.').slice(0, -1)
    : []

  return (
    <>
      <div className={s.rootMeal}>
        <div className={s.firstPart}>
          <div className={s.mealView}>
            {properMeal.strYoutube ? (
              <NavLink target={'_blank'} to={properMeal.strYoutube}>
                <Typography as={'h3'} variant={'extra_large'}>
                  {properMeal?.strMeal}
                </Typography>
              </NavLink>
            ) : (
              <Typography as={'h3'} variant={'extra_large'}>
                {properMeal?.strMeal}
              </Typography>
            )}
            <img
              alt={properMeal?.strMeal}
              onClick={() => setShowPicture(true)}
              src={properMeal?.['strMealThumb']}
            />
          </div>
          <ShowIngredientList infoAboutMeal={properMeal} />
        </div>
        <div className={s.secondPart}>
          <Typography as={'p'}>Instructions</Typography>
          {instructions.map(el => (
            <Typography key={el} variant={'small'}>
              {el}.
            </Typography>
          ))}

          <Typography as={'p'} variant={'small'}>
            Serve: {properMeal.strMeal}
          </Typography>
        </div>
      </div>
      <Modal setShowModal={setShowPicture} showModal={showPicture}>
        <div className={s.modalContent}>
          <img alt={properMeal?.strMeal} src={properMeal?.['strMealThumb']} />
        </div>
      </Modal>
    </>
  )
}
