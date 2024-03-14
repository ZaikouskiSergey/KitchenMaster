import { baseAPI } from '@/shared/api/baseAPI'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseAPI.middleware),
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
