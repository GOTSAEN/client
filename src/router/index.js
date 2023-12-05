import NotFound from '@pages/NotFound';
import Home from '@pages/Home';
import App from '@/App';
import ProductDetail from '@/pages/ProductDetail';
import ProductEnroll from '@/pages/ProductEnroll';
import Setting from '@/pages/Setting';
import PastAds from '@/pages/setting/youtuber/past-ads';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProgressAds from '@/pages/setting/youtuber/progress-ads';
import WaitingAds from '@/pages/setting/youtuber/waiting-ads';
import LogIn from '@/pages/LogIn';
import SignUp from '@/pages/SignUp';
import PartnerProgressAds from '@/pages/setting/partner/progress-ads';
import ProgressYoutuber from '@/pages/setting/partner/progress-youtuber';
import PwChange from '@/pages/setting/PwChange';
import ProtectedRoutes from '@/pages/ProtectedRoutes';
import ProtectedAdminRoutes from '@/pages/ProtectedAdvertiserRoutes';
import Profile from '@/pages/setting/profile';
import PartnerWaitingAds from '@/pages/setting/partner/wating-ads';
import Ads from '@/pages/Ads';
import Welcome from '@/pages/Welcome';
import Search from '@/pages/Search';
import YoutuberProfile from '@/pages/setting/youtuber/youtuber-profile';
import NoAuthRoutes from '@/pages/NoAuthRoutes';
import Youtuber from '@/pages/Youtuber';
import Secession from '@/pages/Secession';
import WaitingYoutuber from '@/pages/setting/partner/waiting-youtuber';
import Bookmarks from '@/pages/setting/youtuber/bookmarks';
import PartnerPastAds from '@/pages/setting/partner/past-ads';
import ScrollTop from '@/components/common/ScrollTop';
import PastYoutuber from '@/pages/setting/partner/past-youtuber';
import { YOUTUBER_ROUTES } from './youtuber';
import { PARTNER_ROUTES } from './advertiser';

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route exact element={<App />}>
          <Route exact index path="/" element={<Home />} />
          <Route exact path="/youtuber" element={<Youtuber />} />
          <Route
            path="/login"
            element={
              <NoAuthRoutes>
                <LogIn />
              </NoAuthRoutes>
            }
          />
          <Route
            path="/signup"
            element={
              <NoAuthRoutes>
                <SignUp />
              </NoAuthRoutes>
            }
          />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/welcome" element={<Welcome />} />

          <Route exact path="/ads/:category" element={<Ads />} />
          <Route
            path="/product/update/campaign/:campaignId"
            exact
            element={
              <ProtectedAdminRoutes>
                <ProductEnroll />
              </ProtectedAdminRoutes>
            }
          />

          <Route exact path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/product/create"
            element={
              <ProtectedAdminRoutes>
                <ProductEnroll />
              </ProtectedAdminRoutes>
            }
          />
          <Route
            exact
            path="/setting"
            element={
              <ProtectedRoutes>
                <Setting />
              </ProtectedRoutes>
            }
          >
            {YOUTUBER_ROUTES.map(({ path, children }) => (
              <Route exact path={path} element={children} />
            ))}
          </Route>
          {/* 로그인 된 회원만 접근 가능  */}

          {/* 광고주의 광고 상품 관련 url */}
          <Route
            path="/setting/partner"
            element={
              <ProtectedAdminRoutes>
                <Setting />
              </ProtectedAdminRoutes>
            }
          >
            {PARTNER_ROUTES.map(({ path, children }) => (
              <Route exact path={path} element={children} />
            ))}
          </Route>
          <Route exact path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
