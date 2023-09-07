import { createBrowserRouter } from 'react-router-dom'
import NotFound from '@pages/NotFound'
import Home from '@pages/Home'
import App from '@/App'
import ProductDetail from '@/pages/ProductDetail'
import ProductEnroll from '@/pages/ProductEnroll'
import Setting from '@/pages/Setting'
import PastAds from '@/pages/setting/past-ads'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import ProgressAds from '@/pages/setting/progress-ads'
import WaitingAds from '@/pages/setting/waiting-ads'

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
            <Route
              path='ads/waiting'
              element={<WaitingAds />}
            />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
