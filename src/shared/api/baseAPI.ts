import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1',
  }),
  endpoints: () => ({}),
  reducerPath: 'baseAPI',
})
