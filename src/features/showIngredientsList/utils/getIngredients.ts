import { ListMealsType } from '@/entities/meals/model/servieces/meals'

export const getIngredients = (meal: ListMealsType) => {
  const totalList = []

  for (let i = 1; i <= 15; i++) {
    const ingredient = `strIngredient${i}`
    const measure = `strMeasure${i}`
    const currentIngredient = meal[ingredient]
    const currentMeasure = meal[measure]

    if (currentIngredient) {
      const currentObject = { ingredient: currentIngredient, measure: currentMeasure }

      totalList.push(currentObject)
    } else {
      return totalList
    }
  }

  return totalList
}
