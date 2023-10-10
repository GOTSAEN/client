import NotFound from "@pages/NotFound";
import Home from "@pages/Home";
import App from "@/App";
import ProductDetail from "@/pages/ProductDetail";
import ProductEnroll from "@/pages/ProductEnroll";
import Setting from "@/pages/Setting";
import PastAds from "@/pages/setting/past-ads";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProgressAds from "@/pages/setting/progress-ads";
import WaitingAds from "@/pages/setting/waiting-ads";
import LogIn from "@/pages/LogIn";
import SignUp from "@/pages/SignUp";
import PartnerProgressAds from "@/pages/setting/partner/progress-ads";
import ProgressYoutuber from "@/pages/setting/partner/progress-youtuber";
import PwChange from "@/pages/setting/PwChange";
import Profile from "@/pages/setting/profile";

export default function Router() {
  return (
    <BrowserRouter basename="/client">
      <Routes>
        <Route element={<App />}>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product/create" element={<ProductEnroll />} />
          <Route path="/setting" element={<Setting />}>
            <Route index path="ads/progress" element={<ProgressAds />} />
            <Route path="ads/past" element={<PastAds />} />
            <Route path="ads/waiting" element={<WaitingAds />} />
            <Route path="pwchange" element={<PwChange />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/setting/partner" element={<Setting />}>
            <Route path="ads/progress" element={<PartnerProgressAds />} />
            <Route
              path="ads/progress/campaign/:campaignId"
              element={<ProgressYoutuber />}
            />

            <Route path="ads/past" element={<PastAds />} />
            <Route path="ads/waiting" element={<WaitingAds />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
