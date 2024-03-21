import { baseAPI } from '@/shared/api/baseAPI'

export const mealsAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getInfoAboutMealByName: builder.query<MealsResponse, any>({
      query: ({ name }) => ({
        method: 'GET',
        url: `search.php?s=${name}`,
      }),
    }),
    getListMealsByCategory: builder.query<IngredientResponse, any>({
      query: ({ category }) => ({
        method: 'GET',
        url: `filter.php?c=${category}`,
      }),
    }),
    getListMealsByCountry: builder.query<IngredientResponse, any>({
      query: ({ country }) => ({
        method: 'GET',
        url: `filter.php?a=${country}`,
      }),
    }),
    getListMealsByFirstLetter: builder.query<MealsResponse, any>({
      query: ({ letter }) => ({
        method: 'GET',
        url: `search.php?f=${letter}`,
      }),
    }),
    getListOfCategories: builder.query<CategoriesResponse, any>({
      query: () => ({
        method: 'GET',
        url: 'categories.php',
      }),
    }),
    getMealsContainIngredient: builder.query<IngredientResponse, any>({
      query: ({ ingredient }) => ({
        method: 'GET',
        url: `filter.php?i=${ingredient}`,
      }),
    }),
  }),
})

export const {
  useGetInfoAboutMealByNameQuery,
  useGetListMealsByCategoryQuery,
  useGetListMealsByCountryQuery,
  useGetListMealsByFirstLetterQuery,
  useGetListOfCategoriesQuery,
  useGetMealsContainIngredientQuery,
} = mealsAPI

export type CategoriesResponse = {
  categories: Array<CategoryType>
}

export type CategoryType = {
  idCategory: string
  strCategory: string
  strCategoryDescription: string
  strCategoryThumb: string
}
export type IngredientResponse = {
  meals: Array<MealsContainIngredientType>
}
export type MealsContainIngredientType = {
  idMeal: string
  strMeal: string
  strMealThumb: string
}
export type MealsResponse = {
  meals: Array<ListMealsType>
}
export type ListMealsType = {
  [key: string]: null | string
  dateModified: null
  idMeal: string
  strArea: string
  strCategory: string
  strCreativeCommonsConfirmed: null
  strDrinkAlternate: null | string
  strImageSource: null
  strIngredient1: string
  strIngredient2: null | string
  strIngredient3: null | string
  strIngredient4: null | string
  strIngredient5: null | string
  strIngredient6: null | string
  strIngredient7: null | string
  strIngredient8: null | string
  strIngredient9: null | string
  strIngredient10: null | string
  strIngredient11: null | string
  strIngredient12: null | string
  strIngredient13: null | string
  strIngredient14: null | string
  strIngredient15: null | string
  strIngredient16: null | string
  strIngredient17: null | string
  strIngredient18: null | string
  strIngredient19: null | string
  strIngredient20: null | string
  strInstructions: string
  strMeal: string
  strMealThumb: string
  strMeasure1: string
  strMeasure2: null | string
  strMeasure3: null | string
  strMeasure4: null | string
  strMeasure5: null | string
  strMeasure6: null | string
  strMeasure7: null | string
  strMeasure8: null | string
  strMeasure9: null | string
  strMeasure10: null | string
  strMeasure11: null | string
  strMeasure12: null | string
  strMeasure13: null | string
  strMeasure14: null | string
  strMeasure15: null | string
  strMeasure16: null | string
  strMeasure17: null | string
  strMeasure18: null | string
  strMeasure19: null | string
  strMeasure20: null | string
  strSource: null | string
  strTags: null | string
  strYoutube: null | string
}
