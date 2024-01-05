import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '@pages/NotFound';
import Home from '@pages/Home';
import App from '@/App';
import ProductDetail from '@/pages/ProductDetail';
import ProductEnroll from '@/pages/ProductEnroll';
import Setting from '@/pages/Setting';
import LogIn from '@/pages/LogIn';
import SignUp from '@/pages/SignUp';
import ProtectedRoutes from '@/pages/ProtectedRoutes';
import ProtectedAdminRoutes from '@/pages/ProtectedAdvertiserRoutes';
import Ads from '@/pages/Ads';
import Welcome from '@/pages/Welcome';
import Search from '@/pages/Search';
import NoAuthRoutes from '@/pages/NoAuthRoutes';
import Youtuber from '@/pages/Youtuber';
import ScrollTop from '@/components/common/ScrollTop';
import { YOUTUBER_ROUTES } from './youtuber';
import { PARTNER_ROUTES } from './advertiser';

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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

          <Route exact path="/ads" element={<Ads />} />
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
              <Route exact path={path} element={children} key={path} />
            ))}
          </Route>
          <Route
            path="/setting/partner"
            element={
              <ProtectedAdminRoutes>
                <Setting />
              </ProtectedAdminRoutes>
            }
          >
            {PARTNER_ROUTES.map(({ path, children }) => (
              <Route exact path={path} element={children} key={path} />
            ))}
          </Route>
          <Route exact path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
