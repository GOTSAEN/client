import { createBrowserRouter } from 'react-router-dom'
import NotFound from '@pages/NotFound'
import Home from '@pages/Home'
import App from '@/App'
import ProductDetail from '@/pages/ProductDetail'
import ProductEnroll from '@/pages/ProductEnroll'
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true, path: '/', element: <Home /> },
        {
          path: '/product/:id',
          element: <ProductDetail />,
        },
        {
          path: '/product/create',
          element: <ProductEnroll />,
        },
      ],
    },
  ],
  {
    basename: '/client',
  }
)
