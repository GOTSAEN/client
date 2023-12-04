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

          {/* 로그인 된 회원만 접근 가능  */}
          <Route
            path="/setting"
            element={
              <ProtectedRoutes>
                <Setting />
              </ProtectedRoutes>
            }
          >
            <Route exact path="me/profile" element={<YoutuberProfile />} />
            <Route exact path="me/pwchange" element={<PwChange />} />
            <Route exact path="secession" element={<Secession />} />
            <Route exact index path="ads/bookmark" element={<Bookmarks />} />
            <Route exact index path="ads/progress" element={<ProgressAds />} />
            <Route exact path="ads/past" element={<PastAds />} />
            <Route exact path="ads/waiting" element={<WaitingAds />} />
          </Route>

          {/* 광고주의 광고 상품 관련 url */}
          <Route
            path="/setting/partner"
            element={
              <ProtectedAdminRoutes>
                <Setting />
              </ProtectedAdminRoutes>
            }
          >
            <Route exact path="ads/progress" element={<PartnerProgressAds />} />
            <Route exact path="ads/waiting" element={<PartnerWaitingAds />} />

            <Route exact path="ads/waiting/campaign/:campaignId" element={<WaitingYoutuber />} />
            <Route exact path="ads/progress/campaign/:campaignId" element={<ProgressYoutuber />} />
            <Route exact path="ads/past/campaign/:campaignId" element={<PastYoutuber />} />

            <Route exact path="ads/past" element={<PartnerPastAds />} />
            <Route exact path="ads/waiting" element={<WaitingAds />} />
          </Route>

          <Route exact path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
