import { createBrowserRouter } from 'react-router-dom'
import NotFound from '@pages/NotFound'
import Home from '@pages/Home'
import App from '@/App'
import ProductDetail from '@/pages/ProductDetail'
import ProductEnroll from '@/pages/ProductEnroll'
import Setting from '@/pages/Setting'
import PastAds from '@/components/setting/past-ads'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import ProgressAds from '@/components/setting/progress-ads'
import Index from '@/components/setting'
// export const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <App />,
//       errorElement: <NotFound />,
//       children: [
//         { index: true, path: '/', element: <Home /> },
//         {
//           path: '/product/:id',
//           element: <ProductDetail />,
//         },
//         {
//           path: '/product/create',
//           element: <ProductEnroll />,
//         },
//         {
//           path: '/setting',
//           element: <Setting />,
//           children: [
//             {
//               path: '/setting/ads/past',
//               element: <PastAds />,
//             },
//           ],
//         },
//       ],
//     },
//   ],
//   {
//     basename: '/client',
//   }
// )

export default function Router() {
  return (
    <BrowserRouter basename='/client'>
      <Routes>
        <Route element={<App />}>
          <Route index path='/' element={<Home />} />
          <Route
            path='/product/:id'
            element={<ProductDetail />}
          />
          <Route
            path='/product/create'
            element={<ProductEnroll />}
          />
          <Route path='/setting' element={<Setting />}>
            <Route
              index
              path='ads/progress'
              element={<ProgressAds />}
            />
            <Route path='ads/past' element={<PastAds />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
