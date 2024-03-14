import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { MainPage } from '@/pages/mainPage/MainPage'
import { MealByCategoryPage } from '@/pages/mealByCategoryPage/MealByCategoryPage'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
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
    ],
    element: <Layout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
