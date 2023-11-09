import NotFound from '@pages/NotFound'
import Home from '@pages/Home'
import App from '@/App'
import ProductDetail from '@/pages/ProductDetail'
import ProductEnroll from '@/pages/ProductEnroll'
import Setting from '@/pages/Setting'
import PastAds from '@/pages/setting/youtuber/past-ads'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import ProgressAds from '@/pages/setting/youtuber/progress-ads'
import WaitingAds from '@/pages/setting/youtuber/waiting-ads'
import LogIn from '@/pages/LogIn'
import SignUp from '@/pages/SignUp'
import PartnerProgressAds from '@/pages/setting/partner/progress-ads'
import ProgressYoutuber from '@/pages/setting/partner/progress-youtuber'
import PwChange from '@/pages/setting/PwChange'
import ProtectedRoutes from '@/pages/ProtectedRoutes'
import ProtectedAdminRoutes from '@/pages/ProtectedAdvertiserRoutes'
import Profile from '@/pages/setting/profile'
import PartnerWaitingAds from '@/pages/setting/partner/wating-ads'
import Ads from '@/pages/Ads'
import Welcome from '@/pages/Welcome'
import Search from '@/pages/Search'
import YoutuberProfile from '@/pages/setting/youtuber/youtuber-profile'
import NoAuthRoutes from '@/pages/NoAuthRoutes'
import Youtuber from '@/pages/Youtuber'
import Secession from '@/pages/Secession'
import WaitingYoutuber from '@/pages/setting/partner/waiting-youtuber'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index path='/' element={<Home />} />
          <Route path='/youtuber' element={<Youtuber />} />
          <Route
            path='/login'
            element={
              <NoAuthRoutes>
                <LogIn />
              </NoAuthRoutes>
            }
          />
          <Route
            path='/signup'
            element={
              <NoAuthRoutes>
                <SignUp />
              </NoAuthRoutes>
            }
          />
          <Route path='/search' element={<Search />} />
          <Route path='/welcome' element={<Welcome />} />

          <Route path='/ads/:category' element={<Ads />} />
          <Route
            path='/product/update/campaign/:campaignId'
            exact
            element={
              <ProtectedAdminRoutes>
                <ProductEnroll />
              </ProtectedAdminRoutes>
            }
          />

          <Route
            path='/product/:id'
            element={<ProductDetail />}
            exact
          />
          <Route
            path='/product/create'
            element={
              <ProtectedAdminRoutes>
                <ProductEnroll />
              </ProtectedAdminRoutes>
            }
          />

          {/* 로그인 된 회원만 접근 가능  */}
          <Route
            path='/setting'
            element={
              <ProtectedRoutes>
                <Setting />
              </ProtectedRoutes>
            }
          >
            <Route
              path='me/profile'
              element={<YoutuberProfile />}
            />
            <Route
              path='me/pwchange'
              element={<PwChange />}
            />
            <Route
              path='secession'
              element={<Secession />}
            />
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

          {/* 광고주의 광고 상품 관련 url */}
          <Route
            path='/setting/partner'
            element={
              <ProtectedAdminRoutes>
                <Setting />
              </ProtectedAdminRoutes>
            }
          >
            <Route
              path='ads/progress'
              element={<PartnerProgressAds />}
            />
            <Route
              path='ads/waiting'
              element={<PartnerWaitingAds />}
            />
            <Route
              path='ads/waiting/campaign/:campaignId'
              element={<WaitingYoutuber />}
            />
            <Route
              path='ads/progress/campaign/:campaignId'
              element={<ProgressYoutuber />}
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
