import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './features/auth/components/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const { UserLayout } = await import('@/layout')
      return { Component: UserLayout }
    },

    children: [
      {
        index: true,
        lazy: async () => {
          const { HomePage } = await import('@/pages')
          return { Component: HomePage }
        },
      },
      {
        path: 'shop',
        lazy: async () => {
          const { ShopPage } = await import('@/pages')
          return { Component: ShopPage }
        },
      },
      {
        path: 'product/:id',
        lazy: async () => {
          const { ProductPage } = await import('@/pages')
          return { Component: ProductPage }
        },
      },
      {
        path: 'cart',
        lazy: async () => {
          const { CartPage } = await import('@/pages')
          return { Component: CartPage }
        },
      },
      {
        path: '/signin',
        lazy: async () => {
          const { SigninPage } = await import('@/pages')
          return { Component: SigninPage }
        },
      },
      {
        path: '/signup',
        lazy: async () => {
          const { SignupPage } = await import('@/pages')
          return { Component: SignupPage }
        },
      },
      {
        path: 'profile/:id',
        lazy: async () => {
          const { ProfilePage } = await import('@/pages')
          return {
            element: (
              <ProtectedRoute roles={['User']}>
                <ProfilePage />
              </ProtectedRoute>
            ),
          }
        },
      },
    ],
  },

  {
    path: '/admin',
    lazy: async () => {
      const { AdminLayout } = await import('@/layout')
      return { Component: AdminLayout }
    },
    children: [
      {
        index: true,
        lazy: async () => {
          const { AdminMainPage } = await import('@/pages')
          return {
            element: (
              <ProtectedRoute roles={['Admin']}>
                <AdminMainPage />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'products',
        lazy: async () => {
          const { ProductsPage } = await import('@/pages')
          return {
            element: (
              <ProtectedRoute roles={['Admin']}>
                <ProductsPage />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'categories',
        lazy: async () => {
          const { CategoriesPage } = await import('@/pages')
          return {
            element: (
              <ProtectedRoute roles={['Admin']}>
                <CategoriesPage />
              </ProtectedRoute>
            ),
          }
        },
      },
      {
        path: 'users',
        lazy: async () => {
          const { UsersPage } = await import('@/pages')
          return {
            element: (
              <ProtectedRoute roles={['Admin']}>
                <UsersPage />
              </ProtectedRoute>
            ),
          }
        },
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
