import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetMealsContainIngredientQuery } from '@/entities/meals/model/servieces/meals'
import { Typography } from '@/shared/ui'
import { Modal } from '@/shared/ui/modal/ui'
import { BrowseMeals } from '@/widgets/browseMeals'

import s from './IngredientsPage.module.scss'

export const IngredientsPage = () => {
  const { name } = useParams()
  const [showPicture, setShowPicture] = useState(false)

  const { data } = useGetMealsContainIngredientQuery({
    ingredient: name,
  })

  const mealContainIngredient = data && data.meals

  return (
    <>
      <div className={s.ingredientRoot}>
        <div className={s.imagePart}>
          <Typography as={'h3'} variant={'extra_large'}>
            {name}
          </Typography>
          <img
            alt={name}
            onClick={() => setShowPicture(true)}
            src={`https://www.themealdb.com/images/ingredients/${name}.png`}
          />
        </div>
        <div className={s.mealsPart}>
          <Typography as={'h3'} variant={'extra_large'}>
            Meals
          </Typography>
          {mealContainIngredient && <BrowseMeals listOfMeals={mealContainIngredient} />}
        </div>
      </div>
      <Modal setShowModal={setShowPicture} showModal={showPicture}>
        <div className={s.modalContent}>
          <img alt={name} src={`https://www.themealdb.com/images/ingredients/${name}.png`} />
        </div>
      </Modal>
    </>
  )
}
