import { baseAPI } from '@/shared/api/baseAPI'

export const mealsAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getListOfCategories: builder.query<CategoriesResponse, void>({
      query: () => ({
        method: 'GET',
        url: 'categories.php',
      }),
    }),
  }),
})

export const { useGetListOfCategoriesQuery } = mealsAPI

export type CategoriesResponse = {
  categories: Array<CategoryType>
}

export type CategoryType = {
  idCategory: string
  strCategory: string
  strCategoryDescription: string
  strCategoryThumb: string
}
