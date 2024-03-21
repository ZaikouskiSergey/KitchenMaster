import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { BrowseMealByCountryPage } from '@/pages/browseMealByCountry/BrowseMealByCountryPage'
import { BrowseMealByLetterPage } from '@/pages/browseMealByLetterPage'
import { BrowseMealBySearchPage } from '@/pages/browseMealBySearchPage'
import { IngredientsPage } from '@/pages/ingredientsPage/IngredientsPage'
import { MainPage } from '@/pages/mainPage/MainPage'
import { MealByCategoryPage } from '@/pages/mealByCategoryPage/MealByCategoryPage'
import { MealPage } from '@/pages/mealPage/MealPage'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { SearchByLetter } from '@/widgets/searchByLetter'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <SearchByLetter />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    children: [
      {
        element: <MainPage />,
        path: '/',
      },
      {
        element: <MealByCategoryPage />,
        path: '/category/:name',
      },
      {
        element: <BrowseMealByLetterPage />,
        path: 'browse/letter/:letter',
      },
      {
        element: <MealPage />,
        path: 'meal/:name',
      },
      {
        element: <IngredientsPage />,
        path: 'ingredient/:name',
      },
      {
        element: <BrowseMealBySearchPage />,
        path: 'browse/search/:letters',
      },
      {
        element: <BrowseMealByCountryPage />,
        path: 'browse/:country',
      },
    ],
    element: <Layout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
